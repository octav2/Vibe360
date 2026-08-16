import os

CSS_BLOCK = """

/* =============================================================
   VIBE360 - Service Hero Image Fallbacks
   ============================================================= */
.service-hero-image {
    position: relative;
    overflow: hidden;
}
.service-hero-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(11, 15, 25, 0.2) 0%, rgba(11, 15, 25, 0.85) 100%);
    pointer-events: none;
}
"""

def append_css():
    filepath = "C:\\Users\\alex\\Desktop\\Vibe360\\css\\styles.css"
    with open(filepath, "a", encoding="utf-8") as f:
        f.write(CSS_BLOCK)
    print("Appended CSS for hero fallback")

if __name__ == "__main__":
    append_css()
