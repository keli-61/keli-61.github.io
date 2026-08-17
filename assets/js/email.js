// Email addresses are split across data attributes so that crawlers scraping the
// raw HTML never see a complete address; the link is only assembled in the browser.
(function(document) {
    var build = function(node) {
        var parts = [node.getAttribute('data-user'),
                     node.getAttribute('data-domain'),
                     node.getAttribute('data-tld')];

        if (!parts[0] || !parts[1] || !parts[2]) {
            return;
        }

        var address = parts[0] + '@' + parts[1] + '.' + parts[2],
            link = document.createElement('a');

        link.href = 'mailto:' + address;
        link.textContent = address;
        node.parentNode.replaceChild(link, node);
    };

    var initialize = function() {
        var nodes = document.querySelectorAll('.obfuscated-email');
        for (var i = 0; i < nodes.length; i++) {
            build(nodes[i]);
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, false);
    } else {
        initialize();
    }
})(document);
