var _ajax = function (url, data) {
    if (data == undefined) {
        data = {};
    }
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
function myFunction() {
    var countInOnePage = 10;
    var countShowPages = 3;
    var countPages = 0;
    var currentPage;
    var result;
    var resultCount;
    var amount;


    amount = $('#amount').val();
    var toCurrency = $('#iwantdropdown').val();
    var fromCurrency = $('#ihavedropdown').val();

    if (!amount) {
        $('#amount').addClass('error-input');
    }

    if (!toCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('error-input');

    }

    if (!fromCurrency) {
        $('#ihavedropdown').parent().find('.select2').addClass('error-input');

    }

    if (toCurrency == fromCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('error-input');
        $('#ihavedropdown').parent().find('.select2').addClass('error-input');
    }

    var input_data = {
        toCurrency: $('#iwantdropdown').val(),
        fromCurrency: $('#ihavedropdown').val(),
        amount: $('#amount').val()
    }

    if (amount && toCurrency && fromCurrency && toCurrency != fromCurrency) {

        _ajax('https://cryptoscanner.co/exchange/',input_data).then(function (data) {
            if (resultCount = data.data.length) {
                result = data.data;
                currentPage = 1;

                if (resultCount > countInOnePage) {
                    countPages = Math.ceil(resultCount / countInOnePage);
                    renderPagination();
                } else {
                    $('#pagination').hide();
                }

                $('.no_data').hide();

                renderData();
            } else {
                $('.no_data').show();
                $('#price-table').hide();
                $('#pagination').hide();
            }
        })


        $('#iwantdropdown').parent().find('.select2').removeClass('error-input');
        $('#ihavedropdown').parent().find('.select2').removeClass('error-input');
    }


    function renderPagination() {
        var minPage, maxPage;

        if (currentPage == 1) {
            minPage = 1;
            maxPage = countShowPages;
        } else if (currentPage == countPages) {
            minPage = countPages - countShowPages * 1 + 1;

            if (minPage <= 0) {
                minPage = 1;
            }

            maxPage = countPages;
        } else {
            minPage = currentPage * 1 - 1;
            maxPage = currentPage * 1 + 1;
        }

        $('#pagination').show();
        var paginationHtml = '<li class="page-item"><a class="page-link" href="1"><</a></li>';

        for (var i = minPage; i <= maxPage; i++) {
            var active = '';

            if (i == currentPage) {
                active = 'active';
            }
            paginationHtml += '<li class="page-item '+ active +'"><a class="page-link active" href="'+ i +'">' + i + '</a></li>'
        }

        paginationHtml += '<li class="page-item"><a class="page-link" href="'+ countPages +'">></a></li>';

        $('.pagination').html(paginationHtml);
        $('.page-item').on('click', clickPage);
    }

    function clickPage(e) {
        var page = $(e.currentTarget).find('a').attr('href');

        if (page != currentPage) {
            currentPage = page;
            renderPagination();
            renderData();
        }

        return false;
    }

    function renderData() {
        $('#comparisonTable').show();
        $('#price-table').show();

        var html = '';
        var start = (currentPage - 1) * countInOnePage;
        var end = start + countInOnePage;

        if (resultCount < end) {
            end = resultCount;
        }
        var strVar=""
        for (var i = start; i < end; i++) {
            var id = '';
            var data=result[i]
            strVar += '<tr>';
            strVar += '    <td><a style=" width:100%; text-align: center" href=" "> <div class="align-middle"><div>' + data[0][0] + '</div></a> <a style="text-align: center; width:100%;"  href=" "> <div>' + data[0][1] + '</div></div></a></td>';
            strVar += '    <td><a href="' + data[1][0].link + '" target="_blank"><span style="width:100%; display:flex;  justify-content:center;"><img style="vertical-align:middle;" src="' + data[1][0].image + ' "></span></a>' + '<a href="' + data[1][1].link + '" target="_blank"><span style="width:100%; display:flex;  justify-content:center;"><img style="vertical-align:middle;" src="' + data[1][1].image + ' "></span></a></td>';
            strVar += '    <td><div style="width:100%; text-align: center">' + data[2][0] + '</div><div style="100%; text-align: center">' + data[2][1] + '</div></td>';
            strVar += '    <td><div style="width:100%; text-align: center">' + data[3][0] + '</div><div style="100%; text-align: center">' + data[3][1] + '</div></td>';
            strVar += '</tr>';

        }
        $('#price-table tbody').html(strVar);

    }
}
