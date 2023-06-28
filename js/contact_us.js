$(function() {
    fetchPage('partials/navbar.html', '#navbar', { contact_us: true });
    fetchPage('partials/title.html', '#titleHeader', { title: "Contact Us" });
    fetchPage('partials/footer.html', '#footer');
});