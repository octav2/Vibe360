<!-- File: 05_ASSET_SPECIFICATIONS.md -->

# 05. Visual Assets Specification & Directory Guide

## 1. Directory Structure

Create an `assets/` folder in your project root with the following structure:

vibe360/
└── assets/
├── hero/
│   ├── 360-hero-loop.mp4             # High-energy 360 platform loop
│   └── hero-fallback.jpg             # High-res poster image for mobile
├── products/
│   ├── 360-platform-setup.jpg        # 80cm platform + ring light + stanchions
│   ├── audio-phone-cream.jpg         # Vintage cream phone close-up
│   └── vip-bundle-combo.jpg          # 360 booth + audio phone side-by-side
├── gallery/
│   ├── video-overlay-sample.jpg      # Custom graphics overlay frame sample
│   ├── party-guests-spin.jpg         # Smiling guests using 360 platform
│   └── guest-voicemail-phone.jpg     # Guest picking up audio phone
└── venues/
└── local-venues-sprite.png       # Venue trust logo banner

---

## 2. Asset Specifications & Dimensions

| Asset Name | Recommended Format | Dimensions (WxH) | Target File Size | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`360-hero-loop.mp4`** | MP4 (H.264, Muted) | 1080 x 1350 (4:5) or 1920x1080 | **< 8 MB** | Autoplay loop on right side of Hero section |
| **`hero-fallback.jpg`** | WebP / JPG | 1200 x 800 px | **< 150 KB** | Shown on mobile or slow connections |
| **`360-platform-setup.jpg`** | WebP / JPG | 800 x 600 px | **< 100 KB** | Header thumbnail image for £399 card |
| **`vip-bundle-combo.jpg`** | WebP / JPG | 800 x 600 px | **< 120 KB** | Header thumbnail image for £549 card |
| **`audio-phone-cream.jpg`** | WebP / JPG | 800 x 600 px | **< 100 KB** | Product card for Standalone Phone page |
| **`gallery-*.jpg`** | WebP / JPG | 800 x 800 px (1:1 Square) | **< 90 KB each** | 4-card "See It In Action" preview grid |

---

## 3. Recommended Visual Style & Production Guidelines

1. **Lighting & Atmosphere:** Photos should feature warm ambient event lighting (gold stanchions, fairy lights, LED glow) to reflect a premium £500+ party service.
2. **Human Connection:** Always prioritize images showing real people laughing, dancing, or speaking into the phone rather than empty equipment standing alone in a dark room.
3. **Format Optimization:** Convert all static images to **WebP** format using free compression tools (e.g., *TinyPNG* or *Squoosh*) to keep performance high for mobile users.