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

    // Footer dynamic year
    const yearEl = document.querySelector('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});