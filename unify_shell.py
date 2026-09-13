# -*- coding: utf-8 -*-
"""Unify VIBE360 header/footer across every HTML page.

For each page:
  - replace any existing <header>...</header> with <div id="site-header"></div>
    (or insert one right after <body> when the page has no header)
  - replace the <footer>...</footer> region with <div id="site-footer"></div>
    (handles truncated files that never closed the footer tag)
  - ensure a closing </body></html>
  - add <script src="/js/site-shell.js" defer></script>
  - normalise any support@VIBE360.co.uk -> office@vibe360.co.uk
"""
import glob
import re
import io

PAGES = (sorted(glob.glob('*.html')) +
         sorted(glob.glob('services/*.html')) +
         sorted(glob.glob('locations/*.html')))

SCRIPT = '<script src="/js/site-shell.js" defer></script>'
HEADER_PLACEHOLDER = '<div id="site-header"></div>'
FOOTER_PLACEHOLDER = '<div id="site-footer"></div>'


def strip_bom(s):
    return s.lstrip('\ufeff')


def read(path):
    raw = io.open(path, 'r', encoding='utf-8-sig', errors='replace').read()
    return strip_bom(raw)


def write(path, text):
    io.open(path, 'w', encoding='utf-8', newline='').write(text)


def replace_header(text):
    # Remove existing real header (if any)
    text = re.sub(r'<header\b[^>]*>.*?</header>', HEADER_PLACEHOLDER,
                  text, count=1, flags=re.S)
    # If still no placeholder, insert right after <body ...>
    if HEADER_PLACEHOLDER not in text:
        m = re.search(r'<body\b[^>]*>', text, flags=re.I)
        if m:
            text = text[:m.end()] + '\n    ' + HEADER_PLACEHOLDER + text[m.end():]
        else:
            text = HEADER_PLACEHOLDER + '\n' + text
    return text


def replace_footer(text):
    if FOOTER_PLACEHOLDER in text:
        return text
    start = text.find('<footer')
    if start == -1:
        return text + '\n    ' + FOOTER_PLACEHOLDER + '\n'
    if '</footer>' in text[start:]:
        end = text.find('</footer>', start) + len('</footer>')
        return text[:start] + FOOTER_PLACEHOLDER + '\n' + text[end:]
    # truncated: footer never closed; drop remainder of file
    return text[:start] + FOOTER_PLACEHOLDER + '\n'


def ensure_close(text):
    if not re.search(r'</body\s*>', text, flags=re.I):
        text = text.rstrip() + '\n</body>\n'
    if not re.search(r'</html\s*>', text, flags=re.I):
        text = text.rstrip() + '\n</html>\n'
    return text


def add_script(text):
    if '/js/site-shell.js' in text:
        return text
    if SCRIPT in text:
        return text
    m = re.search(r'</body\s*>', text, flags=re.I)
    if m:
        return text[:m.start()] + '    ' + SCRIPT + '\n' + text[m.start():]
    return text.rstrip() + '\n    ' + SCRIPT + '\n'


def fix_email(text):
    return re.sub(r'support@vibe360\.co\.uk', 'office@vibe360.co.uk',
                  text, flags=re.I)


def process(path):
    text = read(path)
    orig = text
    text = replace_header(text)
    text = replace_footer(text)
    # Remove legacy main.js include — site-shell.js now owns all chrome
    text = re.sub(r'<script[^>]*\bsrc="[^"]*main\.js"[^>]*>\s*</script>', '', text, flags=re.I)
    text = re.sub(r'\s*<script[^>]*\bsrc="[^"]*main\.js"[^>]*>\s*</script>\s*', '\n', text, flags=re.I)
    text = ensure_close(text)
    text = add_script(text)
    text = fix_email(text)
    if text != orig:
        write(path, text)
        return True
    return False


changed = []
for p in PAGES:
    if process(p):
        changed.append(p)

print('PAGES PROCESSED: %d' % len(changed))
for p in changed:
    print('  ' + p)