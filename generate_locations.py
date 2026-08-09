import os
import re
import shutil

locations = [
    {
        "town": "High Wycombe",
        "slug": "360-photo-booth-hire-high-wycombe",
        "venues": ["Adams Park", "Wycombe Swan", "Kings Hotel", "Hellfire Caves"]
    },
    {
        "town": "Amersham",
        "slug": "360-photo-booth-hire-amersham",
        "venues": ["Kings Chapel", "The Crown Inn", "Missenden Abbey", "Chenies Manor"]
    },
    {
        "town": "Beaconsfield",
        "slug": "360-photo-booth-hire-beaconsfield",
        "venues": ["Crazy Bear Beaconsfield", "Hall Barn", "Crowne Plaza Beaconsfield"]
    },
    {
        "town": "Gerrards Cross",
        "slug": "360-photo-booth-hire-gerrards-cross",
        "venues": ["Bull Hotel", "Gerrards Cross Golf Club", "Heatherden Hall"]
    },
    {
        "town": "Aylesbury",
        "slug": "360-photo-booth-hire-aylesbury",
        "venues": ["Hartwell House", "Waddesdon Manor", "The Waterside Theatre"]
    },
    {
        "town": "Marlow",
        "slug": "360-photo-booth-hire-marlow",
        "venues": ["Danesfield House", "The Compleat Angler", "Bisham Abbey"]
    }
]

os.makedirs('locations', exist_ok=True)

with open('index.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Fix the CSS and JS links for subdirectory
template = template.replace('href="/css/styles.css"', 'href="../css/styles.css"')
template = template.replace('src="/js/main.js"', 'src="../js/main.js"')
# The nav links are already absolute paths like /about-us.html which is good, but wait, my previous script made them:
# <li><a href="/about-us.html">About</a></li>
# This is perfectly fine for locations as well.

for loc in locations:
    town = loc["town"]
    slug = loc["slug"]
    venues = loc["venues"]
    
    content = template
    
    # Update Title
    content = re.sub(r'<title>.*?</title>', f'<title>360 Photo Booth Hire {town} | Vibe360</title>', content)
    
    # Update Meta Description
    meta_desc = f'Premium 360 video booth hire and vintage audio guest book rentals in {town}. Popular at {", ".join(venues)}. Book online in 60 seconds!'
    content = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{meta_desc}">', content)
    
    # Update H1
    content = re.sub(r'<h1>.*?</h1>', f'<h1>360 Photo Booth Hire {town}</h1>', content)
    
    # Create Venues HTML
    venues_html = f"""
    <!-- Venues Section -->
    <section id="venues" style="background: var(--dark-card); margin-top: 40px; padding: 40px 0;">
        <div class="container">
            <div class="section-title">
                <h2>Popular {town} Venues We Serve</h2>
                <p>We regularly provide 360 photo booth and audio guestbook hire at these fantastic local venues.</p>
            </div>
            <div class="pricing-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
    """
    for venue in venues:
        venues_html += f"""
                <div class="step-card" style="padding: 20px;">
                    <h3 style="font-size: 1.1rem; color: #fff;">{venue}</h3>
                </div>
        """
    venues_html += """
            </div>
        </div>
    </section>
    """
    
    # Insert Venues HTML after the trust-bar
    content = re.sub(r'(<div class="trust-bar">.*?</div>\s*</div>)', r'\1\n' + venues_html, content, flags=re.DOTALL)
    
    with open(f'locations/{slug}.html', 'w', encoding='utf-8') as f:
        f.write(content)

print("Locations generated.")
