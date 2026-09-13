// Shared navigation, FAQ accordion, mobile menu & dynamic footer year
document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion — allow only one open item at a time
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const accordion = item.parentElement.querySelectorAll('.faq-item');
            const isActive = item.classList.contains('active');
            accordion.forEach(open => open.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Mobile navigation toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('open'));
        });
    }

    // Services dropdown tap-toggle (touch) — same open/close pattern as FAQ .active.
    // Desktop hover/focus-within is pure CSS; this only adds the tap path + outside-click/Escape close.
    const drop = document.querySelector('.nav-dropdown');
    if (drop) {
        const dropToggle = drop.querySelector('.nav-dropdown-toggle');
        const setOpen = (open) => {
            drop.classList.toggle('is-open', open);
            if (dropToggle) dropToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        };
        if (dropToggle) {
            dropToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                setOpen(!drop.classList.contains('is-open'));
            });
        }
        document.addEventListener('click', (e) => {
            if (!drop.contains(e.target)) setOpen(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setOpen(false);
        });
    }

    // Footer dynamic year
    const yearEl = document.querySelector('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});