import os
import re
import glob

html_files = glob.glob('*.html')
old_font_regex = r'<link href="https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans[^"]*" rel="stylesheet">'
new_font = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">'

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = re.sub(old_font_regex, new_font, content)
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
