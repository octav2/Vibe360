# AntiGravity Website Build & Routing Specification
_Last updated to match live site — vibe360.co.uk_

## 1. Project Goal
Transform the Vibe360 site into a modular, multi-page, SEO-optimized website with dedicated routing, clean URLs, one consistent shared header/footer, and hyper-local landing page generation for target UK towns.

---

## 2. Directory & Architecture Mapping

```
vibe360/
│
├── index.html                            # Homepage (vibe360.co.uk/)
├── about-us.html                          # About Page (vibe360.co.uk/about-us)
├── ipad-selfie-pod-hire.html              # Product Page (vibe360.co.uk/ipad-selfie-pod-hire)
├── 360-video-booth-hire.html              # Product Page (vibe360.co.uk/360-video-booth-hire)
├── audio-guestbook-hire.html              # Product Page (vibe360.co.uk/audio-guestbook-hire)
├── vip-bundle.html                        # Product Page (vibe360.co.uk/vip-bundle) — BUILD: currently linked from nav but page doesn't exist yet
├── check-availability.html                # Booking Widget (vibe360.co.uk/check-availability)
├── contact.html                           # Contact Form (vibe360.co.uk/contact)
├── terms-and-conditions.html              # Legal T&Cs (vibe360.co.uk/terms-and-conditions)
├── privacy-policy.html                    # Privacy Policy (vibe360.co.uk/privacy-policy)
│
├── css/
│   └── styles.css                        # Shared global styles, variables, & responsive grid
│
├── js/
│   ├── main.js                           # Shared navigation, FAQ accordion, & mobile menu
│   └── booking.js                        # Interactive date checker & pricing calculator
│
└── locations/                            # Hyper-Local SEO Folder
    ├── 360-photo-booth-hire-high-wycombe.html
    ├── 360-photo-booth-hire-amersham.html
    ├── 360-photo-booth-hire-beaconsfield.html
    ├── 360-photo-booth-hire-gerrards-cross.html
    ├── 360-photo-booth-hire-aylesbury.html
    ├── 360-photo-booth-hire-marlow.html
    ├── 360-photo-booth-hire-chesham.html
    ├── 360-photo-booth-hire-chalfont-st-peter.html
    ├── 360-photo-booth-hire-chalfont-st-giles.html
    ├── 360-photo-booth-hire-great-missenden.html
    ├── 360-photo-booth-hire-stoke-poges.html
    ├── 360-photo-booth-hire-bourne-end.html
    ├── 360-photo-booth-hire-hazlemere.html
    └── 360-photo-booth-hire-penn.html
```

> **Correction from previous draft:** this build plan previously had no page at all for the iPad Selfie Pod, even though it exists live with its own pricing and content. Added `ipad-selfie-pod-hire.html`. The `/locations/` folder previously targeted only 6 of the 14 towns the site now claims to serve — expanded to the full canonical list (see `01_SITE_ARCHITECTURE.md`). Build in priority order (the original 6, then the remaining 8) rather than all at once if that's more manageable.

---

## 3. Global Navigation & Clean URL Rules — ONE HEADER, ONE FOOTER

1. **Header Navigation:** The header must be byte-for-byte identical on every page (this was the original problem — three different nav structures were found across the live site). It should include:
   * Home (`/`)
   * About (`/about-us`)
   * Services (dropdown: iPad Selfie Pod, 360 Video Booth, Audio Guestbook, VIP Bundle)
   * Packages & Pricing (`/#packages`)
   * Book Now (`/check-availability`) — always styled as a solid pink button, never a plain text link

2. **Footer:** Identical on every page — same contact email (`office@vibe360.co.uk`, lowercase, this exact address — a previous draft of the live site had `support@VIBE360.co.uk` on one page only), same "Services & Quick Links" column, same full 14-town coverage list matching `01_SITE_ARCHITECTURE.md`.

3. **Clean URLs (.htaccess / Server Config):**
   * Strip `.html` extensions in production so URLs resolve cleanly:
     * `vibe360.co.uk/about-us`
     * `vibe360.co.uk/ipad-selfie-pod-hire`
     * `vibe360.co.uk/locations/360-photo-booth-hire-high-wycombe`

4. **Deposit consistency:** every page referencing a booking deposit must say **£100** — no page should say £50.

---

## 4. AntiGravity Automation Tasks

### Task 1: Extract Shared CSS & JavaScript
* Move all inline `<style>` tags from individual HTML files into `css/styles.css`.
* Link `css/styles.css` in the `<head>` of all HTML files.
* Extract interactive JavaScript (FAQ toggle, smooth scroll) into `js/main.js`.

### Task 2: Build the Missing VIP Bundle Page
* `vip-bundle.html` — currently linked from the 360 Booth page's nav but does not exist as a real page.
* Content: all 3 services bundled, £747 (standalone value £897, save £150) — see `03_SERVICE_BUNDLES.md` for full package contents.

### Task 3: Local SEO Page Generation
Use `360-photo-booth-hire-high-wycombe.html` as the master template to generate localized pages inside the `/locations/` directory for all 14 canonical towns (see directory tree above). For each:

1. **Amersham** — Local Venues: *Kings Chapel, The Crown Inn, Missenden Abbey, Chenies Manor*
2. **Beaconsfield** — Local Venues: *Crazy Bear Beaconsfield, Hall Barn, Crowne Plaza Beaconsfield*
3. **Gerrards Cross** — Local Venues: *Bull Hotel, Gerrards Cross Golf Club, Heatherden Hall*
4. **Aylesbury** — Local Venues: *Hartwell House, Waddesdon Manor, The Waterside Theatre*
5. **Marlow** — Local Venues: *Danesfield House, The Compleat Angler, Bisham Abbey*
6. **High Wycombe, Chesham, Chalfont St Peter, Chalfont St Giles, Great Missenden, Stoke Poges, Bourne End, Hazlemere, Penn** — venue lists TBD; research and populate before publishing each page (do not launch a location page with a placeholder venue list).

### Task 4: Localized Content Replacement Rules
When generating each location page, dynamically update:
* `<title>` tag to include `360 Photo Booth Hire [Town Name]`
* `<meta name="description">` targeting `[Town Name]`
* `<h1>` hero heading to reflect `[Town Name]`
* Venue grid cards with the corresponding town's venues
* A brief cross-link to the iPad Selfie Pod and Audio Guestbook pages, since a visitor on a "360 booth [town]" page may want either of the other two services
