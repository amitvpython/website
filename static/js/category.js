if(parseInt($('.load-more-button').attr('data-next')) >= parseInt($('.load-more-button').attr('data-max'))) {
    $('.load-more-button').addClass('d-none');
}

var _ajax = function (url, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            headers: {"X-CSRFToken": $("input[name*='csrfmiddlewaretoken']").val()},
            url: url,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {
                resolve(result);
            },
            error: function (e) {
                console.log(e);
                reject(e);
            }
        });
    });
};
var card = function (config) {
    console.log(config);
    return `<a class="infinite-item anchor-underline-0 text-dark" href='/article/${config.link}'>
        <div class="media d-flex flex-column flex-sm-row my-1 my-md-3">
            <img src='/media/${config.image}'
                 onerror="this.src='/static/img/200x150-placeholder.png'"
                 class="align-self-start mr-3" width="200px" alt="${config.heading}">
            <div class="media-body">
                <h6 class="my-3 my-sm-0">${config.heading}</h6>
                <p class="my-1 my-sm-0">
                    <small class="text-muted">Posted on ${config.date}</small> | <small class="text-muted">By ${config.author__name}</small>
                </p>
                <p class="my-1 my-sm-0">
                    <small class="text-muted">${config.description}</small>
                </p>
            </div>
        </div>
        <hr>
    </a>`;
};
var generateRow = function (articles) {
    for (let i = 0; i < articles.length; i++) {
        $('[data-parent="all-articles"]')[0].append($.parseHTML(card({
            link: articles[i].link.toLowerCase(),
            heading: articles[i].heading,
            image: articles[i].image,
            author__name: articles[i].author__name,
            date: articles[i].date,
            description: articles[i].description,
        }))[0]);
    }
};
$('.load-more-button').on('click', function() {

    var category = $(this).attr('data-category');
    var next = $(this).attr('data-next');
    _ajax('/articles/', {'category__name': category, 'next': next}).then(function(data) {

        generateRow(data['data']['articles']);
        $('.load-more-button').attr('data-next',
            parseInt($('.load-more-button').attr('data-next')) + data['data']['articles'].length
        );
        if(
            parseInt($('.load-more-button').attr('data-next')) >= parseInt($('.load-more-button').attr('data-max'))
        ) {
            $('.load-more-button').addClass('d-none');
        }
    });
});