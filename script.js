document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const downloadLinks = document.querySelectorAll('a[href="Huzaifa-CV.pdf"]');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Toggle Light' : 'Toggle Dark';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ensure download links work immediately
    downloadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            const a = document.createElement('a');
            a.href = url;
            a.download = link.getAttribute('download');
            a.click();
        });
    });
});