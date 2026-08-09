import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll just collect all styles and manually clean them up later if needed,
# or we can assume index.html has the main ones and others have few additions.
all_styles = []
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extract style
    match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if match:
        all_styles.append(f"/* Styles from {f} */\n" + match.group(1))

# Create css directory and styles.css
os.makedirs('css', exist_ok=True)
with open('css/styles.css', 'w', encoding='utf-8') as f:
    f.write("\n".join(all_styles))

# Create js directory and main.js
os.makedirs('js', exist_ok=True)
main_js_content = """
// Shared navigation, FAQ accordion, & mobile menu
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});
"""
with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(main_js_content.strip())

nav_replacement = """
    <!-- Header Navigation -->
    <div class="container">
        <nav>
            <a href="/" class="logo">VIBE<span>360</span></a>
            <ul class="nav-links">
                <li><a href="/about-us.html">About</a></li>
                <li><a href="/audio-guestbook-hire.html">Audio Guestbook</a></li>
                <li><a href="/#packages">Packages & Pricing</a></li>
                <li><a href="/check-availability.html">Book Online</a></li>
            </ul>
            <a href="/check-availability.html" class="btn">Book Online</a>
        </nav>
    </div>
"""

# Process each HTML file
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace style block
    content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="/css/styles.css">', content, flags=re.DOTALL)
    
    # Replace script block
    content = re.sub(r'<script>\s*document\.querySelectorAll\(\'\.faq-question.*?<\/script>', '<script src="/js/main.js" defer></script>', content, flags=re.DOTALL)
    
    # Update navigation
    # This regex looks for the <nav> block within <div class="container">...</div>
    content = re.sub(r'<div class="container">\s*<nav>.*?</nav>\s*</div>', nav_replacement.strip(), content, flags=re.DOTALL)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Refactoring completed.")
