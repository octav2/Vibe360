// ============================================================
//  VIBE360 — Location Landing Page Generator
//  Reusable modular template driven by locationsData.js.
//  Run:  node generate-locations.js
//  Outputs: locations/photo-booth-hire-{slug}.html
// ============================================================
'use strict';

const fs = require('fs');
const path = require('path');
const { locations } = require('./locationsData.js');

const OUT_DIR = path.join(__dirname, 'locations');
const CHECK = '<svg class="check-ico" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';

const SVC = {
  selfie: '/services/ipad-selfie-pod-hire.html',
  three60: '/services/360-video-booth-hire.html',
  audio: '/services/vintage-audio-guestbook-hire.html'
};

function head(loc) {
  const { name, slug } = loc;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GX53D9NDNR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GX53D9NDNR');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO: Meta Title & Description -->
    <title>Photo Booth Hire ${name} | 360 Booth &amp; Selfie Pod Rental</title>
    <meta name="description" content="Luxury photo booth, digital iPad selfie pod &amp; 360 video booth hire in ${name}. Free local delivery, &pound;5M venue insured &amp; PAT certified. Instant quote online.">
    <link rel="canonical" href="https://vibe360.co.uk/locations/photo-booth-hire-${slug}">

    <!-- Open Graph / Social -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Photo Booth Hire ${name} | 360 Booth &amp; Selfie Pod Rental">
    <meta property="og:description" content="Luxury photo booth, selfie pod &amp; 360 video booth hire in ${name}, Buckinghamshire. Free delivery, fully insured &amp; PAT tested.">
    <meta property="og:url" content="https://vibe360.co.uk/locations/photo-booth-hire-${slug}">

    <!-- JSON-LD: LocalBusiness (no telephone) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "VIBE360 Event Rentals - ${name}",
      "url": "https://vibe360.co.uk/locations/photo-booth-hire-${slug}",
      "priceRange": "\\u00A3\\u00A3",
      "description": "Premium photo booth, 360 video booth, and audio guestbook hire in ${name}, Buckinghamshire.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${name}",
        "addressRegion": "Buckinghamshire",
        "addressCountry": "GB"
      },
      "areaServed": [
        "${name}",
        "South Buckinghamshire",
        "Home Counties"
      ]
    }
    </script>

    <!-- Google Fonts & Font Awesome Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" defer></script>

    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
`;
}

function navig() {
  return `    <!-- ============================================
         STICKY NAVIGATION HEADER
         ============================================ -->
    <header class="site-header">
        <div class="container nav">
            <nav>
                <a href="/" class="logo">VIBE<span>360</span></a>
                <ul class="nav-links">
                    <li><a href="/about-us.html">About Us</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#pricing">Packages &amp; Pricing</a></li>
                    <li><a href="/#gallery">Gallery</a></li>
                </ul>
                <a href="/check-availability.html" class="btn btn-pink nav-cta">Book Now</a>
                <button class="nav-toggle" aria-label="Toggle navigation menu">
                    <span></span><span></span><span></span>
                </button>
            </nav>
        </div>
    </header>
`;
}

function hero(loc) {
  const { name } = loc;
  return `    <!-- ============================================
         HERO SECTION
         ============================================ -->
    <div class="container">
        <div class="hero service-hero">
            <h1>Premium Photo Booth, 360 Video &amp; Selfie Pod Hire in ${name}</h1>
            <p>Elevate your wedding, birthday party, or corporate event in ${name} with luxury iPad selfie pods, studio-lit 360 video spin booths, and retro audio guestbooks. Free delivery and full setup across ${name} and surrounding HP postcodes.</p>

            <div class="hero-ctas">
                <a href="/check-availability.html" class="btn btn-accent"><i class="fa-solid fa-calendar-check"></i> Check Availability in ${name}</a>
                <a href="#pricing" class="btn btn-outline"><i class="fa-solid fa-tags"></i> View Packages &amp; Pricing</a>
            </div>

            <div class="micro-trust">
                <span>${CHECK} Free ${name} Delivery</span>
                <span>${CHECK} &pound;5M Venue Public Liability Insured</span>
                <span>${CHECK} PAT Tested &amp; Venue Approved</span>
                <span>${CHECK} Instant Digital AirDrop &amp; QR Code Sharing</span>
            </div>
        </div>
`;
}
function venues(loc) {
  return `    <!-- ============================================
         LOCAL VENUE PROOF BANNER
         ============================================ -->
    <section class="section venue-banner">
        <div class="container">
            <p class="venue-label">TRUSTED BY TOP VENUES &amp; EVENT HOSTS IN ${loc.name}</p>
            <div class="venue-pills-container">
                ${loc.venues.map(v => `<span class="venue-pill">${v}</span>`).join(' ')}
            </div>
        </div>
    </section>
`;
}

function services(loc) {
  const { name } = loc;
  return `    <!-- ============================================
         CORE SERVICE TRIO
         ============================================ -->
    <section class="section service-trio" id="services">
        <div class="container">
            <div class="section-title">
                <h2>Book Your Event Experience in ${name}</h2>
                <p>All packages include free local delivery, full setup, and a dedicated operator across ${name} and surrounding HP postcodes.</p>
            </div>
            <div class="service-trio">
                <div class="service-card">
                    <div class="service-icon"><i class="fa-solid fa-tablet-screen-button"></i></div>
                    <h3>Digital iPad Selfie Pod Hire in ${name}</h3>
                    <p class="card-desc">Ultra-compact footprint (&lt;1m&sup2;), studio LED halo light, custom graphic overlays, and instant AirDrop/QR sharing. Book as a 12-hour self-service drop-off or hosted package.</p>
                    <ul class="card-feats">
                        <li>${CHECK} <span>Ultra-Compact &lt;1m&sup2; Footprint</span></li>
                        <li>${CHECK} <span>Studio LED Halo Lighting</span></li>
                        <li>${CHECK} <span>Instant AirDrop &amp; QR Sharing</span></li>
                    </ul>
                                        <a href="${SVC.selfie}" class="btn btn-accent">View Selfie Pod Packages</a>
                </div>
                <div class="service-card">
                    <div class="service-icon"><i class="fa-solid fa-video"></i></div>
                    <h3>360 Slow-Mo Video Booth Hire in ${name}</h3>
                    <p class="card-desc">High-speed 4K slow-motion platform with studio lighting towers, custom music tracks, and immediate QR video delivery. A full 2-person operator team is included for your event in ${name}.</p>
                    <ul class="card-feats">
                        <li>${CHECK} <span>4K HD Slow-Motion FX</span></li>
                        <li>${CHECK} <span>Custom Music Tracks</span></li>
                        <li>${CHECK} <span>Dedicated Operator Team</span></li>
                    </ul>
                                        <a href="${SVC.three60}" class="btn btn-accent">View 360 Spin Packages</a>
                </div>
                <div class="service-card">
                    <div class="service-icon"><i class="fa-solid fa-phone"></i></div>
                    <h3>Vintage Audio Guestbook Hire in ${name}</h3>
                    <p class="card-desc">Authentic restored rotary telephones with a custom host greeting, unlimited guest voicemails, and a complete digital MP3 gallery delivered after your ${name} event.</p>
                    <ul class="card-feats">
                        <li>${CHECK} <span>Restored Rotary Telephones</span></li>
                        <li>${CHECK} <span>Unlimited Guest Voicemails</span></li>
                        <li>${CHECK} <span>Full MP3 Audio Gallery</span></li>
                    </ul>
                                        <a href="${SVC.audio}" class="btn btn-accent">View Audio Guestbook</a>
                </div>
            </div>
        </div>
    </section>
`;
}
function why(loc) {
  const { name } = loc;
  return `    <!-- ============================================
         WHY EVENT PLANNERS CHOOSE US
         ============================================ -->
    <section class="section why-section">
        <div class="container">
            <div class="section-title">
                <h2>Why Event Planners in ${name} Choose VIBE360</h2>
                <p>We remove the stress so you can enjoy your event. Every detail is handled for your ${name} occasion, from risk assessment to post-event media.</p>
            </div>
            <div class="grid-2x2">
                <div class="why-card"><i class="fa-solid fa-truck"></i><h3>Zero Local Delivery Surcharge in ${name}</h3><p>We are local to Buckinghamshire, so full setup and pack-down in ${name} and all HP postcodes carries zero delivery surcharges. What you quote is what you pay.</p></div>
                <div class="why-card"><i class="fa-solid fa-shield-halved"></i><h3>100% Venue Compliance Guarantee</h3><p>We provide &pound;5M Public Liability Insurance, annual PAT testing certificates, and full venue risk assessments to every ${name} venue.</p></div>
                <div class="why-card"><i class="fa-solid fa-bolt"></i><h3>Instant Digital AirDrop &amp; QR Code Sharing</h3><p>Guests step off the platform and scan a QR code or receive an AirDrop of their HD videos in under 10 seconds.</p></div>
                <div class="why-card"><i class="fa-solid fa-calendar-check"></i><h3>Flexible 60-Second Online Booking</h3><p>Reserve your ${name} date in one minute with a clear &pound;100 deposit. Manage your booking online, any time.</p></div>
            </div>
        </div>
    </section>
`;
}

function gallery(loc) {
  const { name } = loc;
  return `    <!-- ============================================
         GALLERY: "See VIBE360 in Action"
         ============================================ -->
    <section id="gallery" class="gallery-section section">
        <div class="container">
            <div class="section-title">
                <h2>See VIBE360 in Action</h2>
                <p>Watch real event moments, 360 spin clips, and custom overlay templates from recent ${name} events.</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-play"></i></div>
                    <h3>360 Video Spin Demos</h3>
                    <p>Slow-motion spins with custom music FX and branded overlays.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-camera"></i></div>
                    <h3>iPad Selfie Pod Overlays</h3>
                    <p>Glam filters, custom graphic frames, and instant AirDrop sharing.</p>
                </div>
                <div class="gallery-card">
                    <div class="gallery-media"><i class="fa-solid fa-phone"></i></div>
                    <h3>Vintage Audio Guestbook</h3>
                    <p>Restored rotary phones capturing guest voicemails &amp; audio playback preview.</p>
                </div>
            </div>
        </div>
    </section>`;
}
function pricing() {
  return `    <!-- ============================================
         TRANSPARENT PACKAGES &amp; PRICING
         ============================================ -->
    <section class="section pricing-section" id="pricing">
        <div class="container">
            <div class="section-title">
                <h2>Simple, Transparent Packages</h2>
                <p>No hidden fees. All packages include delivery, setup, and an operator within South Buckinghamshire.</p>
            </div>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Digital Selfie Pod (12-Hour Drop-Off)</h3>
                    <p class="price">From &pound;250</p>
                    <ul class="price-feats">
                        <li>${CHECK} <span>12-Hour Self-Service Hire</span></li>
                        <li>${CHECK} <span>Unlimited Photos &amp; GIFs</span></li>
                        <li>${CHECK} <span>Free Local Delivery</span></li>
                    </ul>
                    <a href="/check-availability.html" class="btn btn-accent">Book Selfie Pod</a>
                </div>
                <div class="pricing-card featured card-highlight">
                    <span class="badge-popular">MOST POPULAR</span>
                    <h3>Standard 360 Video Experience (3 Hours)</h3>
                    <p class="price">From &pound;399</p>
                    <ul class="price-feats">
                        <li>${CHECK} <span>4K Slow-Motion Video</span></li>
                        <li>${CHECK} <span>Dedicated Operator</span></li>
                        <li>${CHECK} <span>Instant QR Sharing</span></li>
                    </ul>
                    <a href="/check-availability.html" class="btn btn-pink">Book 360 Experience</a>
                </div>
                <div class="pricing-card">
                    <span class="badge-bundle">SAVE &pound;150 BUNDLE</span>
                    <h3>VIP All-In-One Bundle (Selfie + 360 + Audio Phone)</h3>
                    <p class="price">From &pound;549</p>
                    <ul class="price-feats">
                        <li>${CHECK} <span>All Three Experiences</span></li>
                        <li>${CHECK} <span>Priority Booking</span></li>
                        <li>${CHECK} <span>Full-Day Coverage</span></li>
                    </ul>
                    <a href="/check-availability.html" class="btn btn-accent">Reserve VIP Bundle</a>
                </div>
            </div>
        </div>
    </section>
`;
}
function coverage(loc) {
  const items = locations
    .filter(l => l.slug !== loc.slug)
        .map(l => `<a href="/locations/photo-booth-hire-${l.slug}" class="area-pill"><i class="fa-solid fa-location-dot"></i>${l.name}</a>`)
    .join('\n            ');
  return `    <!-- ============================================
         LOCAL AREA COVERAGE MATRIX
         ============================================ -->
    <section class="section coverage-section">
        <div class="container">
                        <div class="locations-card">
                <h2>Photo Booth Hire Areas Covered Near ${loc.name}</h2>
                <p class="coverage-intro">In addition to ${loc.name}, we provide full delivery and event hosting services across all adjacent South Buckinghamshire locations:</p>
                <div class="loc-grid">
                    <span class="area-pill area-pill-active"><i class="fa-solid fa-location-dot"></i>${loc.name} (you are here)</span>
                    ${items}
                </div>
            </div>
        </div>
    </section>
`;
}

function faq(loc) {
  const { name, venues } = loc;
  const ul = (items) => `<ul>${items.map(i => `<li>${CHECK} <span>${i}</span></li>`).join('\n            ')}</ul>`;
  return `    <!-- ============================================
         LOCALIZED FAQ ACCORDION
         ============================================ -->
    <section class="section faq-section">
        <div class="container">
            <div class="section-title">
                <h2>Frequently Asked Questions &mdash; ${name}</h2>
                <p>All the local questions we get asked for events in ${name} and the surrounding Buckinghamshire area.</p>
            </div>
            <div class="faq-accordion">
                <div class="faq-item">
                    <input type="checkbox" id="faq1" class="faq-toggle">
                    <label for="faq1" class="faq-q">Do you charge delivery fees for events in ${name}?<span class="icon-plus"></span></label>
                    <div class="faq-a">No. We are local to Buckinghamshire, so full setup and pack-down in ${name} and all HP postcodes carries zero delivery surcharges. Your quotation is the total amount you pay.</div>
                </div>
                <div class="faq-item">
                    <input type="checkbox" id="faq2" class="faq-toggle">
                    <label for="faq2" class="faq-q">Which venues in ${name} have you worked with?<span class="icon-plus"></span></label>
                    <div class="faq-a">We have partnered with leading ${name} venues including ${venues.join(', ')}. From luxury wedding venues to private marquees, we handle all venue compliance, PLI certificates, and setup coordination for a seamless experience.</div>
                </div>
                <div class="faq-item">
                    <input type="checkbox" id="faq3" class="faq-toggle">
                    <label for="faq3" class="faq-q">How much space is needed for a photo booth or 360 booth setup?<span class="icon-plus"></span></label>
                    <div class="faq-a">Our iPad selfie pod requires less than 1m&sup2; of floor space &mdash; ideal for smaller ${name} venues. Our 360 video booth requires a 3m &times; 3m area for safe, comfortable guest rotation.</div>
                </div>
                <div class="faq-item">
                    <input type="checkbox" id="faq4" class="faq-toggle">
                    <label for="faq4" class="faq-q">Are your photo booths fully insured for venues in Buckinghamshire?<span class="icon-plus"></span></label>
                    <div class="faq-a">Yes. Every hire across Buckinghamshire &amp; South Bucks includes &pound;5M Public Liability Insurance, annual PAT testing of all equipment, and full venue risk assessments supplied to your chosen ${name} venue on request.</div>
                </div>
            </div>
        </div>
    </section>
`;
}
function cta(loc) {
  return `    <!-- ============================================
         FINAL CTA BANNER
         ============================================ -->
    <section class="section cta-banner">
        <div class="container">
            <h2>Ready to Elevate Your ${loc.name} Event?</h2>
            <p>Secure your photo booth, 360 video, or audio guestbook with a simple online quote &mdash; zero delivery fees, 100% venue compliant.</p>
            <a href="/check-availability.html" class="btn btn-pink"><i class="fa-solid fa-calendar-check"></i> Check Availability in ${loc.name}</a>
        </div>
    </section>
`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<!-- ============================================
         EMAIL-ONLY FOOTER
         ============================================ -->
    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                                <a href="/" class="logo">VIBE<span>360</span></a>
                <p>Event Rentals, Buckinghamshire</p>
                <p class="fine"><i class="fa-solid fa-envelope"></i> <a href="mailto:Bookings@VIBE360.co.uk">Bookings@VIBE360.co.uk</a></p>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                                <ul>
                    <li><a href="/about-us.html">About Us</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#pricing">Packages &amp; Pricing</a></li>
                    <li><a href="/#gallery">Gallery</a></li>
                    <li><a href="/check-availability.html">Book Now</a></li>
                </ul>
            </div>
            <div class="footer-copy">
                <p>&copy; ${year} VIBE360 Event Rentals. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/js/main.js" defer></script>
</body>
</html>
`;
}

function render(loc) {
  return head(loc) +
    navig() +
    hero(loc) +
    venues(loc) +
    services(loc) +
    why(loc) +
    gallery(loc) +
    pricing() +
    coverage(loc) +
    faq(loc) +
    cta(loc) +
    footer();
}

// ============================================================
//  BUILD ALL LOCATION PAGES
// ============================================================
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const phoneRegex = /(tel:|wa\.me|\+44|01494|01442|0149|01625|01844|01895|01296|01494|01494|call\s*now|phone:\s*\d)/gi;
let ok = true;
for (const loc of locations) {
  const html = render(loc);

  // --- QA: encoding, phone, schema sanity ---
  const nonAscii = Buffer.byteLength(html, 'utf8') - Buffer.from(html, 'ascii').length;
  const phoneHits = (html.match(phoneRegex) || []).length;
  const jsBlocks = (html.match(/<script type="application\/ld\+json">/g) || []).length;
  const hasLocalBusiness = html.includes('"@type": "LocalBusiness"');
  const hasTelInSchema = html.includes('"telephone"');

  const file = path.join(OUT_DIR, `photo-booth-hire-${loc.slug}.html`);
  fs.writeFileSync(file, html, 'utf8');

  const flag = (nonAscii === 0 && phoneHits === 0 && jsBlocks === 1 && hasLocalBusiness && !hasTelInSchema);
  if (!flag) ok = false;
  console.log(`[${flag ? 'OK' : 'FAIL'}] locations/photo-booth-hire-${loc.slug}.html  | nonAscii=${nonAscii} phone=${phoneHits} ldjson=${jsBlocks} telProp=${hasTelInSchema}`);
}

console.log(ok ? '\nAll location pages generated & passed QA.' : '\nQA FAILURES detected above.');
process.exit(ok ? 0 : 1);
