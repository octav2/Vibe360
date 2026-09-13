<!-- File: 01_SITE_ARCHITECTURE.md -->

# 01. Site Architecture & SEO Strategy
_Last updated to match live site — vibe360.co.uk_

## 1. Domain & Core Positioning
* **Domain:** `vibe360.co.uk`
* **Core Offer:** Three standalone hire services — Digital iPad Selfie Pod, 360 Slow-Mo Video Booth, and Vintage Audio Guestbook — plus a combined VIP Bundle
* **Primary Region:** South Buckinghamshire & Home Counties

## 2. Information Architecture (Sitemap)

```
/ (Homepage)
├── /about-us
├── /services
│   ├── /ipad-selfie-pod-hire        (Standalone Product Page — £299)
│   ├── /360-video-booth-hire        (Standalone Product Page — £399 / £499 VIP)
│   └── /audio-guestbook-hire        (Standalone Product Page — £199)
├── /vip-bundle                       (Combined Package Page — £747, MISSING — build this)
├── /pricing-and-bundles              (Transparent Package Breakdown, all 3 + bundle)
├── /gallery
├── /check-availability               (Interactive Booking Engine Widget)
└── /locations                        (Local SEO Hub)
    ├── /360-photo-booth-hire-high-wycombe
    ├── /360-photo-booth-hire-aylesbury
    ├── /360-photo-booth-hire-amersham
    ├── /360-photo-booth-hire-beaconsfield
    ├── /360-photo-booth-hire-gerrards-cross
    ├── /360-photo-booth-hire-chesham
    ├── /360-photo-booth-hire-marlow
    ├── /360-photo-booth-hire-chalfont-st-peter
    ├── /360-photo-booth-hire-chalfont-st-giles
    ├── /360-photo-booth-hire-great-missenden
    ├── /360-photo-booth-hire-stoke-poges
    ├── /360-photo-booth-hire-bourne-end
    ├── /360-photo-booth-hire-hazlemere
    └── /360-photo-booth-hire-penn
```

> **Note:** `/vip-bundle` does not appear to exist as a real page yet, even though the 360 Booth page's nav links to "VIP Bundle." Build a real page here, or point that nav link at the homepage bundle section until it exists.

## 3. Canonical Coverage List (use this everywhere — nav, footer, homepage, location pages)
Beaconsfield · Gerrards Cross · Amersham · Chesham · Chalfont St Peter · Chalfont St Giles · Great Missenden · Marlow · High Wycombe · Stoke Poges · Aylesbury · Bourne End · Hazlemere · Penn

This list must be identical wherever it appears — homepage "Areas We Cover" section, the shared footer, and the `/locations` hub. Previous drafts had three different subsets of this list; there is now one.

## 4. SEO Execution Rules
1. **Schema Markup:** Implement `LocalBusiness` and `EventVenue` JSON-LD schema on all town pages.
2. **Meta Pattern:** `360 Photo Booth Hire [Town Name] | VIBE360 | Selfie Pod & Audio Guestbook Available`
3. **Internal Linking:** Every town page links directly to `/check-availability` with a pre-selected location parameter, and cross-links to the other two service pages (Selfie Pod, Audio Guestbook) since a visitor searching "photo booth [town]" may want either.
4. **Service page priority:** the iPad Selfie Pod page was previously missing from this architecture entirely — it is a live, priced product (£299) and needs the same SEO treatment (dedicated meta, schema, internal links) as the 360 Booth page.
