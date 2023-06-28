$(function() {
    fetchPage('partials/navbar.html', '#navbar', { editions: true });
    fetchPage('partials/title.html', '#titleHeader', { title: "Editions" });
    fetchPage('partials/footer.html', '#footer');

    // Populate editions 
    var src = $("#template").html();
    var template = Handlebars.compile(src);
    var rendered = template({
        editions: covers
    });

    $('#data').html(rendered);
});