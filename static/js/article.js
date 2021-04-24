var infinite = null;
fox = null;
var el = document.getElementsByClassName('infinite-item')[document.getElementsByClassName('infinite-item').length - 1];
console.log(el);
console.log(el.dataset.link);
var waypoint = new Waypoint({
    element: el,
    handler: function() {
        history.pushState({
            'id': 'article'
        }, el.getElementsByClassName('card-title')[0].textContent, el.dataset.link)
    }
});
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (infinite == null) {
            infinite = new Waypoint.Infinite({
                element: document.getElementsByClassName('infinite-container')[0],
                onBeforePageLoad: function() {
                    $('.loading').show()
                },
                onAfterPageLoad: function($items) {
                    fox = $items;
                    console.log($items);
                    $('.loading').hide();
                    var waypoint = new Waypoint({
                        element: document.getElementsByClassName('infinite-item')[document.getElementsByClassName('infinite-item').length - 1],
                        offset: '25%',
                        handler: function() {
                            history.pushState({
                                'id': 'article'
                            }, $items[0].getElementsByClassName('card-title')[0].textContent, $items[0].dataset.link);
                            var wrap = document.getElementsByTagName('head')[0];
                            while (wrap.firstChild) wrap.removeChild(wrap.firstChild);
                            var els = document.querySelectorAll('[data-meta="' + $items[0].dataset.link + '"]')[0].getElementsByTagName("*");
                            for (var i = 0; i < els.length; i = i + 1) {
                                wrap.appendChild(els[i])
                            }
                        }
                    })
                }
            })
        }
    }
};
if ($("#stickThis").length > 0) {
    $("#stickThis").stick_in_parent()
}
var elementPosition;
setTimeout(() => {
    elementPosition = $('#social-icons').offset();
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > (elementPosition.top - 35)) {
            jQuery('#social-icons').addClass("sticky")
        } else {
            jQuery('#social-icons').removeClass("sticky")
        }
    })
}, 2000);
var meta_template = function(config) {
    var strVar = "";
    strVar += "<meta charset=\"utf-8\">";
    strVar += "<meta http-equiv=\"pragma\" content=\"no-cache\" \/>";
    strVar += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
    strVar += "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">";
    strVar += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no\">";
    strVar += "<meta name=\"google-site-verification\" content=\"cmMeSgAk6SS5-R9Sx1XpKYUx3sm5BoJ1y4H-SeIJn-s\" \/>";
    strVar += "<meta property=\"og:image\" content=\"https:\/\/cryptoscanner.co\/media\/${config.image}\">";
    strVar += "<meta property=\"og:type\" content=\"article\">";
    strVar += "<meta property=\"og:description\" content=\"${config.description}\">";
    strVar += "<meta name=\"twitter:image\" content=\"https:\/\/cryptoscanner.co\/media\/${config.image}\">";
    strVar += "<meta name=\"twitter:card\" content=\"summary\">";
    strVar += "<meta name=\"twitter:url\" content=\"{% url 'website__article' %}article=?${config.link}\">";
    strVar += "<meta name=\"twitter:title\" content=\"${config.heading}\">";
    strVar += "<meta name=\"twitter:description\" content=\"${config.description}\">";
    strVar += "<title>${config.heading}<\/title>";
    strVar += "<link rel=\"canonical\" href=\"{% url 'website__article' %}article=?${config.link}\">";
    strVar += "<meta property=\"og:locale\" content=\"en_US\">";
    strVar += "<meta property=\"og:type\" content=\"article\">";
    strVar += "<meta property=\"og:title\" content=\"${config.heading}\">";
    strVar += "<meta property=\"og:description\" content=\"${config.description}\">";
    strVar += "<meta property=\"og:url\" content=\"{% url 'website__article' %}article=?${config.link}\">";
    strVar += "<meta property=\"og:site_name\" content=\"CryptoScanner\">";
    strVar += "<meta property=\"article:publisher\" content=\"https:\/\/www.facebook.com\/cryptoscanner.co\">";
    for (index in config.tags) {
        strVar += "<meta property=\"article:tag\" content=\"${config.tags[index]}\">"
    }
    for (index in config.categories) {
        strVar += "<meta property=\"article:tag\" content=\"${config.categories[index]}\">"
    }
    strVar += "<meta property=\"article:published_time\" content=\"${config.date}\">";
    strVar += "<meta property=\"article:modified_time\" content=\"${config.modified_date}\">";
    strVar += "<meta property=\"og:updated_time\" content=\"${config.created_date}\">";
    strVar += "<meta property=\"og:image\" content=\"\/media\/${config.image}\">";
    strVar += "<meta property=\"og:image:secure_url\" content=\"https:\/\/cryptoscanner.co\/media\/${config.image}\">";
    strVar += "<meta property=\"og:image:width\" content=\"645\">";
    strVar += "<meta property=\"og:image:height\" content=\"430\">";
    strVar += "<meta name=\"twitter:card\" content=\"summary_large_image\">";
    strVar += "<meta name=\"twitter:description\" content=\"${config.description}\">";
    strVar += "<meta name=\"twitter:title\" content=\"${config.heading}\">";
    strVar += "<meta name=\"twitter:site\" content=\"@Cryptoscannerco\">";
    strVar += "<meta name=\"twitter:image\" content=\"https:\/\/cryptoscanner.co\/media\/${config.image}\">";
    strVar += "<meta name=\"twitter:creator\" content=\"@Cryptoscannerco\">";
    strVar += "<link rel=\"icon\" href=\"https:\/\/cryptoscanner.co\/static\/logos\/cryptoscanner-icon.png\" sizes=\"32x32\">";
    strVar += "<link rel=\"icon\" href=\"https:\/\/cryptoscanner.co\/static\/logos\/cryptoscanner-icon.png\" sizes=\"192x192\">";
    strVar += "<link rel=\"apple-touch-icon-precomposed\" href=\"https:\/\/cryptoscanner.co\/static\/logos\/cryptoscanner-icon.png\">";
    strVar += "<meta name=\"msapplication-TileImage\" content=\"https:\/\/cryptoscanner.co\/static\/logos\/cryptoscanner-icon.png\">";
    return strVar
}