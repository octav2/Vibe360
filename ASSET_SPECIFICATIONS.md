<!-- File: 05_ASSET_SPECIFICATIONS.md -->

# 05. Visual Assets Specification & Directory Guide
_Last updated to match live site — vibe360.co.uk_

## 1. Directory Structure

Create an `assets/` folder in your project root with the following structure:

```
vibe360/
└── assets/
    ├── hero/
    │   ├── 360-hero-loop.mp4             # High-energy 360 platform loop
    │   └── hero-fallback.jpg             # High-res poster image for mobile
    ├── products/
    │   ├── selfie-pod-setup.jpg          # iPad selfie pod + ring light setup
    │   ├── 360-platform-setup.jpg        # 80cm platform + ring light + stanchions
    │   ├── audio-phone-cream.jpg         # Vintage cream phone close-up
    │   └── vip-bundle-combo.jpg          # All 3 services side-by-side
    ├── gallery/
    │   ├── video-overlay-sample.jpg      # Custom graphics overlay frame sample
    │   ├── party-guests-spin.jpg         # Smiling guests using 360 platform
    │   ├── guest-selfie-pod.jpg          # Guest using the iPad selfie pod
    │   └── guest-voicemail-phone.jpg     # Guest picking up audio phone
    └── venues/
        └── local-venues-sprite.png       # Venue trust logo banner
```

> **Gap identified in previous draft:** there was no asset slot anywhere for the iPad Selfie Pod, even though it's a live product with its own page. Added `selfie-pod-setup.jpg` and `guest-selfie-pod.jpg` above.

---

## 2. Asset Specifications & Dimensions

| Asset Name | Recommended Format | Dimensions (WxH) | Target File Size | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`360-hero-loop.mp4`** | MP4 (H.264, Muted) | 1080 x 1350 (4:5) or 1920x1080 | **< 8 MB** | Autoplay loop on right side of Hero section |
| **`hero-fallback.jpg`** | WebP / JPG | 1200 x 800 px | **< 150 KB** | Shown on mobile or slow connections |
| **`selfie-pod-setup.jpg`** | WebP / JPG | 800 x 600 px | **< 100 KB** | Header thumbnail image for £299 card |
| **`360-platform-setup.jpg`** | WebP / JPG | 800 x 600 px | **< 100 KB** | Header thumbnail image for £399 / £499 card |
| **`vip-bundle-combo.jpg`** | WebP / JPG | 800 x 600 px | **< 120 KB** | Header thumbnail image for £747 bundle card |
| **`audio-phone-cream.jpg`** | WebP / JPG | 800 x 600 px | **< 100 KB** | Product card for Audio Guestbook page |
| **`gallery-*.jpg`** | WebP / JPG | 800 x 800 px (1:1 Square) | **< 90 KB each** | 4-card "See It In Action" preview grid — should represent all 3 services, not just 2 |

---

## 3. Recommended Visual Style & Production Guidelines

1. **Lighting & Atmosphere:** Photos should feature warm ambient event lighting (gold stanchions, fairy lights, LED glow) to reflect a premium party service.
2. **Human Connection:** Always prioritize images showing real people laughing, dancing, or speaking into the phone rather than empty equipment standing alone in a dark room.
3. **Format Optimization:** Convert all static images to **WebP** format using free compression tools (e.g., *TinyPNG* or *Squoosh*) to keep performance high for mobile users.
4. **Service parity:** Whatever gallery/testimonial layout is used, make sure the iPad Selfie Pod gets equal visual representation to the 360 Booth and Audio Guestbook — it was previously the invisible product in this asset plan.
