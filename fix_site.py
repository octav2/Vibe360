import os
import re

ROOT_DIR = "C:\\Users\\alex\\Desktop\\Vibe360"

FOOTER_HTML = """    <!-- Footer (email-first contact, no phone numbers) -->
    <footer class="main-footer">
        <div class="container footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; padding: 60px 0 30px;">
            <!-- COLUMN 1 (Left - Brand Info) -->
            <div class="footer-brand">
                <a href="/" class="logo"><img src="/assets/vibe360-logo.png" alt="VIBE360 Event Rentals" class="h-10 w-auto" style="height: 40px; width: auto;"></a>
                <p style="margin-top: 15px; color: var(--text-gray); font-size: 0.95rem;">
                    South Bucks' premier event rental specialist offering 360 video booths, digital iPad selfie pods, and vintage audio guestbooks for weddings, galas, and private parties.
                </p>
                <p class="fine" style="margin-top: 15px;"><i class="fa-solid fa-envelope"></i> <a href="mailto:support@VIBE360.co.uk">support@VIBE360.co.uk</a></p>
            </div>
            
            <!-- COLUMN 2 (Middle - Quick Links & Core Services) -->
            <div class="footer-links">
                <h4>Services &amp; Quick Links</h4>
                <ul>
                    <li><a href="/#about">About Us</a></li>
                    <li><a href="/services/ipad-selfie-pod-hire.html">iPad Selfie Pod</a></li>
                    <li><a href="/services/360-video-booth-hire.html">360 Video Booth</a></li>
                    <li><a href="/services/vintage-audio-guestbook-hire.html">Audio Guestbook</a></li>
                    <li><a href="/#vip-bundle">VIP Wedding Bundle</a></li>
                    <li><a href="/check-availability.html" style="color: var(--accent);">Book Now / Check Availability</a></li>
                </ul>
            </div>
            
            <!-- COLUMN 3 (Right - Target Locations) -->
            <div class="footer-links">
                <h4>Areas We Cover in South Bucks</h4>
                <ul>
                    <li><a href="/locations/photo-booth-hire-beaconsfield.html">Photo Booth Hire Beaconsfield</a></li>
                    <li><a href="/locations/photo-booth-hire-gerrards-cross.html">Photo Booth Hire Gerrards Cross</a></li>
                    <li><a href="/locations/photo-booth-hire-marlow.html">Photo Booth Hire Marlow</a></li>
                    <li><a href="/locations/photo-booth-hire-high-wycombe.html">Photo Booth Hire High Wycombe</a></li>
                    <li><a href="/locations/photo-booth-hire-amersham.html">Photo Booth Hire Amersham</a></li>
                    <li><a href="/locations/photo-booth-hire-aylesbury.html">Photo Booth Hire Aylesbury</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-copy" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: center; margin-top: 20px;">
            <p>&copy; 2026 VIBE360 Event Rentals. All rights reserved.</p>
        </div>
    </footer>"""

GALLERY_360 = """    <section id="gallery" class="gallery-section section">
        <div class="container">
            <div class="section-title">
                <h2>See the 360 Booth in Action</h2>
                <p>Watch real event moments, 360 spin clips, and custom overlay templates from recent South Buckinghamshire events.</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-play"></i></div>
                    <h3>Slow-Mo Spin Demos</h3>
                    <p>Interactive video placeholder / overlay preview.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-pen-ruler"></i></div>
                    <h3>Custom 2D Graphic Overlays &amp; Music</h3>
                    <p>Personalized visuals and custom soundtrack overlays.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-lightbulb"></i></div>
                    <h3>Multi-Angle Lighting &amp; Platform Showcase</h3>
                    <p>Professional multi-fixture LED setups highlighting the platform.</p>
                </div>
            </div>
        </div>
    </section>"""

GALLERY_SELFIE_POD = """    <section id="gallery" class="gallery-section section">
        <div class="container">
            <div class="section-title">
                <h2>See the Selfie Pod in Action</h2>
                <p>Check out our digital captures, custom frames, and instant sharing features.</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-share-nodes"></i></div>
                    <h3>Instant QR &amp; AirDrop Sharing Demos</h3>
                    <p>Experience ultra-fast sharing straight to guest devices.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-camera"></i></div>
                    <h3>Custom Photo Frame &amp; Overlay Templates</h3>
                    <p>Personalized digital borders matching your event theme.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-gallery"></i></div>
                    <h3>Digital Online Gallery &amp; GIF Previews</h3>
                    <p>Instant GIF generation and a live cloud-synced gallery.</p>
                </div>
            </div>
        </div>
    </section>"""

GALLERY_AUDIO_GUESTBOOK = """    <section id="gallery" class="gallery-section section">
        <div class="container">
            <div class="section-title">
                <h2>Listen to Audio Guestbook Recordings</h2>
                <p>Hear real samples of customized greetings and heartfelt guest voicemails.</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-microphone"></i></div>
                    <h3>Custom Greeting Playback</h3>
                    <p>Listen to bespoke outgoing messages recorded by hosts.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-voicemail"></i></div>
                    <h3>Real Guest Voicemail Samples</h3>
                    <p>Authentic, unscripted voicemails captured at live events.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-phone"></i></div>
                    <h3>Rotary Phone Setup &amp; Audio Quality Demo</h3>
                    <p>Experience the crystal-clear studio-grade audio capture.</p>
                </div>
            </div>
        </div>
    </section>"""

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Favicon injection
    if '<link rel="icon"' not in content:
        content = content.replace('</head>', '    <link rel="icon" type="image/png" href="/assets/favicon.png">\n</head>')

    # 2. Header logo replacement
    # Some pages might have standard spacing, replace text logo with image
    content = content.replace('<a href="/" class="logo">VIBE<span>360</span></a>', '<a href="/" class="logo"><img src="/assets/vibe360-logo.png" alt="VIBE360 Event Rentals" class="h-10 w-auto" style="height: 40px; width: auto;"></a>')

    # 3. Footer replacement
    # Using regex to replace the entire <footer.*?>.*?</footer> block
    # It might optionally be preceded by a comment
    footer_pattern = re.compile(r'(<!-- Footer.*?-->\s*)?<footer.*?>.*?</footer>', re.DOTALL)
    content = footer_pattern.sub(FOOTER_HTML, content)

    # 4. Gallery specific updates for service pages
    basename = os.path.basename(filepath)
    if basename == "360-video-booth-hire.html":
        gallery_pattern = re.compile(r'<section id="gallery" class="gallery-section section">.*?</section>', re.DOTALL)
        content = gallery_pattern.sub(GALLERY_360, content)
    elif basename == "ipad-selfie-pod-hire.html":
        gallery_pattern = re.compile(r'<section id="gallery" class="gallery-section section">.*?</section>', re.DOTALL)
        content = gallery_pattern.sub(GALLERY_SELFIE_POD, content)
    elif basename == "vintage-audio-guestbook-hire.html":
        gallery_pattern = re.compile(r'<section id="gallery" class="gallery-section section">.*?</section>', re.DOTALL)
        content = gallery_pattern.sub(GALLERY_AUDIO_GUESTBOOK, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes for {filepath}")

def main():
    for root, dirs, files in os.walk(ROOT_DIR):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith(".html"):
                process_file(os.path.join(root, file))
                
if __name__ == "__main__":
    main()
