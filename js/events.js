$(function() {
    fetchPage('partials/navbar.html', '#navbar', { events: true });
    fetchPage('partials/title.html', '#titleHeader', { title: "Upcoming Events" });
    fetchPage('partials/footer.html', '#footer');

    // Populate events 
    var src = $("#template").html();
    var template = Handlebars.compile(src);
    var rendered = template({
        events: events_data
    });

    $('#data').html(rendered);
});