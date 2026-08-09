# AntiGravity Website Build & Routing Specification

## 1. Project Goal
Transform the Vibe360 single-page mockup into a modular, multi-page, SEO-optimized website with dedicated routing, clean URLs, and hyper-local landing page generation for target UK towns.

---

## 2. Directory & Architecture Mapping

Organize the repository according to the following file structure:

vibe360/
│
├── index.html                           # Homepage (vibe360.co.uk/)
├── about-us.html                         # About Page (vibe360.co.uk/about-us)
├── audio-guestbook-hire.html            # Product Page (vibe360.co.uk/audio-guestbook-hire)
├── check-availability.html             # Booking Widget (vibe360.co.uk/check-availability)
├── contact.html                         # Contact Form (vibe360.co.uk/contact)
├── terms-and-conditions.html            # Legal T&Cs (vibe360.co.uk/terms-and-conditions)
├── privacy-policy.html                  # Privacy Policy (vibe360.co.uk/privacy-policy)
│
├── css/
│   └── styles.css                       # Shared global styles, variables, & responsive grid
│
├── js/
│   ├── main.js                          # Shared navigation, FAQ accordion, & mobile menu
│   └── booking.js                       # Interactive date checker & pricing calculator
│
└── locations/                           # Hyper-Local SEO Folder
├── 360-photo-booth-hire-high-wycombe.html
├── 360-photo-booth-hire-amersham.html
├── 360-photo-booth-hire-beaconsfield.html
├── 360-photo-booth-hire-gerrards-cross.html
├── 360-photo-booth-hire-aylesbury.html
└── 360-photo-booth-hire-marlow.html

---

## 3. Global Navigation & Clean URL Rules

1. **Header Navigation:** Ensure the header on EVERY page includes functional relative links to:
   * Home (`/`)
   * About (`/about-us.html`)
   * Audio Guestbook (`/audio-guestbook-hire.html`)
   * Packages & Pricing (`/#packages`)
   * Book Online (`/check-availability.html`)

2. **Clean URLs (.htaccess / Server Config):**
   * Strip `.html` extensions in production so URLs resolve cleanly:
     * `vibe360.co.uk/about-us`
     * `vibe360.co.uk/audio-guestbook-hire`
     * `vibe360.co.uk/locations/360-photo-booth-hire-high-wycombe`

---

## 4. AntiGravity Automation Tasks

### Task 1: Extract Shared CSS & JavaScript
* Move all inline `<style>` tags from individual HTML files into `css/styles.css`.
* Link `css/styles.css` in the `<head>` of all HTML files.
* Extract interactive JavaScript (FAQ toggle, smooth scroll) into `js/main.js`.

### Task 2: Local SEO Page Generation
Use `360-photo-booth-hire-high-wycombe.html` as the master template to generate localized pages inside the `/locations/` directory for the following target towns:

1. **Amersham** (`/locations/360-photo-booth-hire-amersham.html`)
   * Local Venues: *Kings Chapel, The Crown Inn, Missenden Abbey, Chenies Manor*
2. **Beaconsfield** (`/locations/360-photo-booth-hire-beaconsfield.html`)
   * Local Venues: *Crazy Bear Beaconsfield, Hall Barn, Crowne Plaza Beaconsfield*
3. **Gerrards Cross** (`/locations/360-photo-booth-hire-gerrards-cross.html`)
   * Local Venues: *Bull Hotel, Gerrards Cross Golf Club, Heatherden Hall*
4. **Aylesbury** (`/locations/360-photo-booth-hire-aylesbury.html`)
   * Local Venues: *Hartwell House, Waddesdon Manor, The Waterside Theatre*
5. **Marlow** (`/locations/360-photo-booth-hire-marlow.html`)
   * Local Venues: *Danesfield House, The Compleat Angler, Bisham Abbey*

### Task 3: Localized Content Replacement Rules
When generating each location page, dynamically update:
* `<title>` tag to include `360 Photo Booth Hire [Town Name]`
* `<meta name="description">` targeting `[Town Name]`
* `<h1>` hero heading to reflect `[Town Name]`
* Venue grid cards with the corresponding town's venues listed above.