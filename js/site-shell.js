/* =============================================================
   VIBE360 — Shared Site Shell (single canonical Header + Footer)
   ========================================================
   One source of truth for the site chrome. Every page drops a
   <div id="site-header"></div> and <div id="site-footer"></div>
   and this script injects identical header/footer markup into
   them, highlights the active nav item (and nothing else changes),
   and wires up the mobile nav, Services dropdown, footer year and
   FAQ accordion.

   Loaded on every page via:  <script src="/js/site-shell.js" defer>
   ============================================================= */
(function () {
    'use strict';

    /* Relative path helper: pages live at /, /services/, /locations/
       so links are written as root-relative (/...). The site is
       served from the domain root (see canonical URL), so this is
       consistent with the existing content markup. */
    var hasMainJs = !!document.querySelector('script[src*="main.js"]');

    /* ------------------------------------------------------------------
     * Canonical Header
     * ------------------------------------------------------------------ */
    function headerHTML(isActive) {
        var serviceFiles = ['ipad-selfie-pod-hire.html',
                            '360-video-booth-hire.html',
                            'vintage-audio-guestbook-hire.html'];
        var svc = serviceFiles.indexOf(isActive) !== -1;
        var svcToggle = svc ? ' is-active' : '';
        var svcActive = function (file) {
            return (isActive === file) ? ' class="is-active"' : '';
        };

        return ''
            + '<header class="site-header">'
            + '  <div class="container nav">'
            + '    <nav>'
            + '      <a href="/" class="logo"><img src="/assets/logo-transparent.png" alt="VIBE360 Event Rentals" class="nav-logo" loading="lazy"></a>'
            + '      <ul class="nav-links">'
            + '        <li><a href="/about-us.html"' + (isActive === 'about' ? ' class="is-active"' : '') + '>About Us</a></li>'
            + '        <li class="nav-dropdown">'
            + '          <a href="/#services" class="nav-dropdown-toggle' + svcToggle + '" aria-haspopup="true" aria-expanded="false">Services<span class="nav-caret"></span></a>'
            + '          <ul class="nav-dropdown-menu">'
            + '            <li><a href="/services/ipad-selfie-pod-hire.html"' + svcActive('ipad-selfie-pod-hire.html') + '>iPad Selfie Pod</a></li>'
            + '            <li><a href="/services/360-video-booth-hire.html"' + svcActive('360-video-booth-hire.html') + '>360 Video Booth</a></li>'
            + '            <li><a href="/services/vintage-audio-guestbook-hire.html"' + svcActive('vintage-audio-guestbook-hire.html') + '>Audio Guestbook</a></li>'
            + '          </ul>'
            + '        </li>'
            + '        <li><a href="/#pricing">Packages &amp; Pricing</a></li>'
            + '        <li><a href="/#gallery">Gallery</a></li>'
            + '      </ul>'
            + '      <a href="/check-availability.html" class="btn btn-pink nav-cta">Book Now</a>'
            + '      <button class="nav-toggle" aria-label="Toggle navigation menu">'
            + '        <span></span><span></span><span></span>'
            + '      </button>'
            + '    </nav>'
            + '  </div>'
            + '</header>';
    }

    /* ------------------------------------------------------------------
     * Canonical Footer  (matches the homepage footer content/layout)
     * ------------------------------------------------------------------ */
    function footerHTML() {
        var pills = [
            ['Amersham', '/locations/photo-booth-hire-amersham.html'],
            ['Aylesbury', '/locations/photo-booth-hire-aylesbury.html'],
            ['Beaconsfield', '/locations/photo-booth-hire-beaconsfield.html'],
            ['Bourne End', '/locations/photo-booth-hire-bourne-end.html'],
            ['Chalfont St Peter', '/locations/photo-booth-hire-chalfont-st-peter.html'],
            ['Chesham', '/locations/photo-booth-hire-chesham.html'],
            ['Gerrards Cross', '/locations/photo-booth-hire-gerrards-cross.html'],
            ['Great Missenden', '/locations/photo-booth-hire-great-missenden.html'],
            ['Hazlemere', '/locations/photo-booth-hire-hazlemere.html'],
            ['High Wycombe', '/locations/photo-booth-hire-high-wycombe.html'],
            ['Marlow', '/locations/photo-booth-hire-marlow.html'],
            ['Penn', '/locations/photo-booth-hire-penn.html'],
            ['Stoke Poges', '/locations/photo-booth-hire-stoke-poges.html']
        ];
        var pillsHtml = '';
        for (var i = 0; i < pills.length; i++) {
            pillsHtml += '<a href="' + pills[i][1] + '" class="location-pill">' + pills[i][0] + '</a>';
        }
        return ''
            + '<footer class="main-footer">'
            + '  <div class="container footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; padding: 60px 0 30px;">'
            + '    <div class="footer-brand">'
            + '      <a href="/" class="logo"><img src="/assets/logo-transparent.png" alt="VIBE360 Event Rentals" class="nav-logo" loading="lazy"></a>'
            + '      <p style="margin-top: 15px; color: var(--text-gray); font-size: 0.95rem;">'
            + '        South Bucks\' premier event rental specialist offering 360 video booths, digital iPad selfie pods, and vintage audio guestbooks for weddings, galas, and private parties.'
            + '      </p>'
            + '      <p class="fine" style="margin-top: 15px;"><i class="fa-solid fa-envelope"></i> <a href="mailto:office@vibe360.co.uk">office@vibe360.co.uk</a></p>'
            + '    </div>'
            + '    <div class="footer-links">'
            + '      <h4>Services &amp; Quick Links</h4>'
            + '      <ul>'
            + '        <li><a href="/#about">About Us</a></li>'
            + '        <li><a href="/services/ipad-selfie-pod-hire.html">iPad Selfie Pod</a></li>'
            + '        <li><a href="/services/360-video-booth-hire.html">360 Video Booth</a></li>'
            + '        <li><a href="/services/vintage-audio-guestbook-hire.html">Audio Guestbook</a></li>'
            + '        <li><a href="/#vip-bundle">VIP Wedding Bundle</a></li>'
            + '        <li><a href="/check-availability.html" style="color: var(--accent);">Book Now / Check Availability</a></li>'
            + '      </ul>'
            + '    </div>'
            + '    <div class="footer-locations">'
            + '      <h4 class="footer-heading">SERVING SOUTH &amp; CENTRAL BUCKS</h4>'
            + '      <div class="location-pill-grid">' + pillsHtml + '</div>'
            + '      <p class="location-subtext">'
            + '        Covering South &amp; Central Bucks including Marlow, Hazlemere, Great Missenden, Bourne End, Penn, Stoke Poges, Chalfont St Peter and Aylesbury villages.'
            + '      </p>'
            + '    </div>'
            + '    <div class="footer-copy" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: center; margin-top: 20px;">'
            + '      <p>&copy; <span id="year"></span> VIBE360 Event Rentals. All rights reserved.</p>'
            + '    </div>'
            + '  </div>'
            + '</footer>';
    }

    /* ------------------------------------------------------------------
     * Determine which nav item corresponds to the current page.
     * Only the single matching top-level item is highlighted.
     * ------------------------------------------------------------------ */
    function activeNav() {
        var p = (location.pathname || '').replace(/\/$/, '');
        if (/about-us\.html$/.test(p)) return 'about';
        var m = /\/services\/([\w-]+\.html?)$/.exec(p);
        return m ? m[1] : null; // homepage, location pages, policies, etc.
    }

    /* ------------------------------------------------------------------
     * Inject the shell into the page, then wire interactions.
     * ------------------------------------------------------------------ */
    function inject() {
        var headerPlaceholder = document.getElementById('site-header');
        var footerPlaceholder = document.getElementById('site-footer');
        var active = activeNav();
        if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML(active);
        if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML();
        wireChrome();
    }

    /* ------------------------------------------------------------------
     * Mobile nav toggle, Services dropdown, footer year, FAQ accordion.
     * When main.js is loaded it handles FAQ + year; we avoid duplicating
     * its bindings to prevent double-toggle behavior.
     * ------------------------------------------------------------------ */
    function wireChrome() {
        var toggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.nav-links');
        if (toggle && nav && !hasMainJs) {
            toggle.addEventListener('click', function () {
                nav.classList.toggle('open');
                toggle.classList.toggle('active');
            });
            var links = nav.querySelectorAll('a');
            for (var l = 0; l < links.length; l++) {
                links[l].addEventListener('click', function () { nav.classList.remove('open'); });
            }
        }

        if (!hasMainJs) {
            var yearEl = document.getElementById('year');
            if (yearEl && !yearEl.textContent.trim()) {
                yearEl.textContent = new Date().getFullYear();
            }
        }

        var drop = document.querySelector('.nav-dropdown');
        if (drop) {
            var t = drop.querySelector('.nav-dropdown-toggle');
            var menu = drop.querySelector('.nav-dropdown-menu');
            if (t && menu) {
                var close = function () {
                    drop.classList.remove('open');
                    t.setAttribute('aria-expanded', 'false');
                };
                var onToggle = function (e) {
                    var isOpen = drop.classList.contains('open');
                    if (!isOpen) {
                        e.preventDefault(); // open dropdown, don't jump yet
                        drop.classList.add('open');
                        t.setAttribute('aria-expanded', 'true');
                    } else {
                        close(); // next click: allow navigating to /#services
                    }
                };
                t.addEventListener('click', onToggle);
                document.addEventListener('click', function (e) {
                    if (!drop.contains(e.target)) close();
                });
            }
        }
    }

    /* FAQ accordion — same behavior as main.js, only when main.js absent */
    function wireFAQ() {
        if (hasMainJs) return;
        var questions = document.querySelectorAll('.faq-question');
        for (var q = 0; q < questions.length; q++) {
            questions[q].addEventListener('click', function () {
                var item = this.parentElement;
                var container = item.parentElement;
                var all = container.querySelectorAll('.faq-item');
                for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
                if (!item.classList.contains('active')) item.classList.add('active');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { inject(); wireFAQ(); });
    } else {
        inject();
        wireFAQ();
    }
})();