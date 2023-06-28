$(function() {
    fetchPage('partials/navbar.html', '#navbar', { editions: true });
    fetchPage('partials/footer.html', '#footer');

    const editionId = getParameterByName('id');
    const edition = editionsContent.find(x => x.id == editionId);

    if (edition) {

        // Add title with caption header
        const cover = covers.find(x => x.id == editionId);
        if (cover) {
            fetchPage('partials/title.html', '#titleHeader', { title: cover.title });
        }

        // Render article content
        var template = Handlebars.compile($("#template").html());
        var rendered = template({
            id: edition.id,
            audio: edition.audio,
            audio_1: edition.audio_1,
            audio_2: edition.audio_2,
            contents: edition.content
        });

        $('#data').html(rendered);

    } else { // Goto list of editions when trying to load an edition that can't be found
        window.location = 'editions.html';
    }
});

/**
 * Get parameter value from query string
 * @param {*} name 
 * @param {*} url 
 * @returns 
 */
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}