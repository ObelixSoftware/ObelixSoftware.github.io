$(function() {
    fetchPage('partials/navbar.html', '#navbar', { home: true });
    fetchPage('partials/title.html', '#titleHeader', { title: "Yesterday's HEROES" });
    fetchPage('partials/footer.html', '#footer');

        // Populate events 
        var src = $("#template").html();

        var buttons = [];
        for (var i = 0; i < covers.length; i++) {
            buttons.push(covers[i]);
        }
        
        var template = Handlebars.compile(src);
        var rendered = template({
            buttons: buttons,
            covers: covers
        });
    
        $('#data').html(rendered);
});