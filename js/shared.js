function fetchPage(file, target, data) {
    $.ajax({
        url: file,
        dataType: 'html',
        success: function(html) {
            if (data) {
                var template = Handlebars.compile(html);
                var rendered = template(data);
                $(target).append(rendered);
            } else {
                $(target).append(html);
            }
        },
        error: function(jqxhr, status, error) {
            console.log(jqxhr, status, error);
        }
    });
}