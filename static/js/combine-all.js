window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-115499767-1');

console.log('Ready');if($('.owl-demo').length>0){$(".owl-demo").owlCarousel({margin:20,items:7,navigation:!0,navigationText:["<img style='height: 20px;' src='/imagefit/resize/32x32//static/img/left-arrow-white.png' alt='left-arrow logo'>","<img style='height: 20px;' src='/imagefit/resize/32x32//static/img/right-arrow-white.png' alt='right-arrow log'>"],itemsDesktop:[1199,6],itemsDesktopSmall:[980,6],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,2]});$('.owl-demo').removeClass('d-none');$('.owl-demo').addClass('d-flex flex-row')}
$('#iwantdropdown').select2({theme:'bootstrap4',});$('#ihavedropdown').select2({theme:'bootstrap4',});var _ajax=function(url,data){if(data==undefined){data={}}
return new Promise(function(resolve,reject){$.ajax({headers:{"X-CSRFToken":$("input[name*='csrfmiddlewaretoken']").val()},url:url,type:'POST',contentType:'application/json; charset=utf-8',dataType:'json',data:JSON.stringify(data),success:function(result){resolve(result)},error:function(e){console.log(e);reject(e)}})})};if($('#featuredCarousel').length>0){$("#featuredCarousel").owlCarousel({navigation:!0,navigationText:["<img style='background-color: #e4e1e1;height: 30px;border-radius: 5px; padding: 8px;margin-left: -15px;' src='/imagefit/resize/32x32//static/img//static/img/left-arrow.png'>","<img style='background-color: #e4e1e1;height: 30px;border-radius: 5px; padding: 8px;margin-right: -15px;' src='/imagefit/resize/32x32//static/img//static/img/right-arrow.png'>"],slideSpeed:300,paginationSpeed:400,singleItem:!0})}
var $item=$('.carousel-item');var $wHeight=$(window).height();$item.eq(0).addClass('active');$item.height($wHeight);$item.addClass('full-screen');$('.carousel img').each(function(){var $src=$(this).attr('src');var $color=$(this).attr('data-color');$(this).parent().css({'background-image':'url('+$src+')','background-color':$color});$(this).remove()});$(window).on('resize',function(){$wHeight=$(window).height();$item.height($wHeight)});$('.carousel').carousel({});$(document).ready(function(){$("a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash})}})});if($('#particles-js').length>0){particlesJS("particles-js",{"particles":{"number":{"value":80,"density":{"enable":!0,"value_area":700}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},},"opacity":{"value":0.5,"random":!1,"anim":{"enable":!1,"speed":1,"opacity_min":0.1,"sync":!1}},"size":{"value":3,"random":!0,"anim":{"enable":!1,"speed":40,"size_min":0.1,"sync":!1}},"line_linked":{"enable":!0,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":!0,"speed":6,"direction":"none","random":!1,"straight":!1,"out_mode":"out","bounce":!1,"attract":{"enable":!1,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":!0,"mode":"grab"},"onclick":{"enable":!0,"mode":"push"},"resize":!0},"modes":{"grab":{"distance":140,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":!0})};function createCookie(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*60*1000));expires="; expires="+date.toGMTString()}else{expires=""}
document.cookie=name+"="+value+expires+"; path=/"};function eraseCookie(name){createCookie(name,"",-1)};function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length)}}
return null};$(document).ready(function(){if(readCookie('PopupStatusCryptoscanner')==null){createCookie('PopupStatusCryptoscanner','true',30)}
if(readCookie('PopupStatusCryptoscanner')=='true'){setTimeout(function(){$("#subscribe_popup").fadeIn("slow")},2000)}
$(".close-subscribe").click(function(){$("#subscribe_popup").fadeOut("slow");eraseCookie('PopupStatusCryptoscanner');createCookie('PopupStatusCryptoscanner','false',30)})
$("body").on("submit",'.article_left_subscribe',function(e){e.preventDefault();var input_data={"email":$(this).parentsUntil(".newsletter-content-area").find('.newsforminput').val(),"source":"Article Page"}
_ajax(window.location.origin+'/news-email/',input_data).then(data=>{$('.newsforminput').val('');$(this).closest(".newsletter-content-area").find('.formResponseMessageNews').html(data.message)
event.preventDefault()}).catch(err=>{$('.newsforminput').val('');$(this).closest(".newsletter-content-area").find('.formResponseMessageNews').html('Message Not Sent')
event.preventDefault()})})})
function myFunction(formName){function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())}
if(validateEmail($('.footerforminput').val())==!1){return}else{var input_data={"email":$('.footerforminput').val(),"source":formName.name.toString().replace("_"," ")}
_ajax(window.location.origin+'/news-email/',input_data).then(function(data){$('.footerforminput').val('')
$('#formResponseMessage').html(data.message)
event.preventDefault()})}}
function news_email(formName){var getEmail=$("form[name="+formName.name+"] .newsforminput").val();function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())}
if(validateEmail(getEmail)==!1){return}else{var input_data={"email":getEmail,"source":formName.name.toString().replace("_"," ")}
_ajax(window.location.origin+'/news-email/',input_data).then(function(data){$('.newsforminput').val('')
$("form[name="+formName.name+"] .formResponseMessageNews").text(data.message)
$("#subscribe_popup").fadeOut("slow");eraseCookie('PopupStatusCryptoscanner');createCookie('PopupStatusCryptoscanner','false',30);event.preventDefault()})}}
function featured_article(){function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())}
if(validateEmail($('#contactEmail').val())==!1){return}else{var input_data={"email":$('#contactEmail').val(),'name':$('#contactName').val(),'subject':$('#contactSub').val(),'message':$('#contactMessage').val()}
_ajax(window.location.origin+'/fetured-request-form/',input_data).then(function(data){$('#contactName').val('')
$('#contactEmail').val('')
$('#contactSub').val('')
$('#contactMessage').val('')
$('#formResponseMessagefeatured').text(data.message)
event.preventDefault()})}}
$(".search-bar form").submit(function(e){e.preventDefault();let SearchText=$(".search-div input").val();if(!window.location.href.includes("/search/")){window.location.href="/search/?q="+SearchText;$.ajax({type:'GET',url:'/search/',data:{q:SearchText},success:function(data){console.log(data);$("#searchResult h1 strong").text(SearchText);$('.load-more-button3').removeClass('d-none')},})}
history.pushState({},null,"?q="+SearchText);$.ajax({type:'POST',url:'/search/',data:JSON.stringify({q:SearchText,next:0}),success:function(data){$("#searchResult h1 strong ").text(SearchText);generateRow(data.data.articles,SearchText);$('.load-more-button3').removeClass('d-none');$('.load-more-button3').attr('data-next',data.data.articles.length)},})});var generateRow=function(articles,SearchText){if(articles.length>0){$('#child').addClass('d-none');for(let i=0;i<articles.length;i++){if(i==0){if($('#searchResult .list-unstyled').text()==""){var strVar="";strVar+="<ul class=\"list-unstyled\" data-parent=\"all-articles\" style=\"overflow-y:scroll;\">";strVar+="";strVar+="                        <a class=\"anchor-underline-0 text-dark\" href=\"\">";strVar+="                            <div class=\"media d-flex flex-column flex-sm-row my-1 my-md-3\">";strVar+="                                <img src=''";strVar+="                                     onerror=\"this.src='\/static\/img\/200x150-placeholder.png'\"";strVar+="                                     class=\"align-self-start mr-3\" width=\"200px\" alt=\"\">";strVar+="                                <div class=\"media-body\">";strVar+="                                    <h6 class=\"my-3 my-sm-0\"><\/h6>";strVar+="                                    <p class=\"my-1 my-sm-0\">";strVar+="                                        <small class=\"text-muted\">Posted on <\/small> | <small class=\"text-muted\">By <\/small>";strVar+="                                    <\/p>";strVar+="                                    <p class=\"my-1 my-sm-0\">";strVar+="                                        <small class=\"text-muted\"><\/small>";strVar+="                                    <\/p>";strVar+="                                <\/div>";strVar+="                            <\/div>";strVar+="                            <hr>";strVar+="                        <\/a>";strVar+="                        <\/ul>";strVar+="<button data-max=\"\"";strVar+="                 data-next=\"\"";strVar+="                class=\"btn btn-block btn-outline-primary load-more-button3 my-4\">More Posts<\/button>";$('#searchResult .col-md-8').append(strVar)}
$('#searchResult .list-unstyled').html($.parseHTML(SearchResult({link:articles[i].link,heading:articles[i].heading,image:articles[i].image,author__name:articles[i].author__name,date:articles[i].date,description:articles[i].description,}))[0])}
else{$('#searchResult .list-unstyled').append($.parseHTML(SearchResult({link:articles[i].link,heading:articles[i].heading,image:articles[i].image,author__name:articles[i].author__name,date:articles[i].date,description:articles[i].description,}))[0])}}}
else{console.log("MIiiii")
$(".load-more-button3").remove();$('#searchResult .list-unstyled').remove()
$("#searchResult .col-md-8 #child").remove();$("#searchResult .col-md-8 ").append("<div id=\"child\" class=\"no-results\">No Result Found </div>")}};var generateRoW=function(articles,SearchText){if(articles.length>0){if($('#searchResult .list-unstyled').text()==""){var strVar="";strVar+="<ul class=\"list-unstyled\" data-parent=\"all-articles\" style=\"overflow-y:scroll;\">";strVar+="";strVar+="                        <a class=\"anchor-underline-0 text-dark\" href=\"\">";strVar+="                            <div class=\"media d-flex flex-column flex-sm-row my-1 my-md-3\">";strVar+="                                <img src=''";strVar+="                                     onerror=\"this.src='\/static\/img\/200x150-placeholder.png'\"";strVar+="                                     class=\"align-self-start mr-3\" width=\"200px\" alt=\"\">";strVar+="                                <div class=\"media-body\">";strVar+="                                    <h6 class=\"my-3 my-sm-0\"><\/h6>";strVar+="                                    <p class=\"my-1 my-sm-0\">";strVar+="                                        <small class=\"text-muted\">Posted on <\/small> | <small class=\"text-muted\">By <\/small>";strVar+="                                    <\/p>";strVar+="                                    <p class=\"my-1 my-sm-0\">";strVar+="                                        <small class=\"text-muted\"><\/small>";strVar+="                                    <\/p>";strVar+="                                <\/div>";strVar+="                            <\/div>";strVar+="                            <hr>";strVar+="                        <\/a>";strVar+="                        <\/ul>";strVar+="<button data-max=\"\"";strVar+="                 data-next=\"\"";strVar+="                class=\"btn btn-block btn-outline-primary load-more-button3 my-4\">More Posts<\/button>";$('#searchResult .col-md-8').append(strVar)}
$('#child').addClass('d-none');for(let i=0;i<articles.length;i++){$('#searchResult .list-unstyled').append($.parseHTML(SearchResult({link:articles[i].link,heading:articles[i].heading,image:articles[i].image,author__name:articles[i].author__name,date:articles[i].date,description:articles[i].description,}))[0])}}
else{console.log("MIiiiiTTTT")
$(".load-more-button3").remove();$('#searchResult .list-unstyled').remove()
$('#searchResult .list-unstyled').append(SearchText+" Not Found")}};var SearchResult=function(config){console.log(config);return `<a class="infinite-item anchor-underline-0 text-dark" href='/article/${config.link}'>
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
</a>`};$("body").on("click",'.load-more-button3',function(e){var SearchText=$("#searchResult h1 strong ").text();var next=$(this).attr('data-next');$.ajax({type:'POST',url:'/search/',data:JSON.stringify({q:SearchText,next:next}),success:function(data){generateRoW(data.data.articles,SearchText);$('.load-more-button3').attr('data-next',parseInt($('.load-more-button3').attr('data-next'))+data.data.articles.length);if(parseInt($('.load-more-button3').attr('data-next'))>=data.data.max){$('.load-more-button3').addClass('d-none')}},})})
var _ajax=function(url,data){return new Promise(function(resolve,reject){$.ajax({headers:{"X-CSRFToken":$("input[name*='csrfmiddlewaretoken']").val()},url:url,type:'POST',contentType:'application/json; charset=utf-8',dataType:'json',data:JSON.stringify(data),success:function(result){resolve(result)},error:function(e){console.log(e);reject(e)}})})};var card=function(config){var featured='';if(config.featured){featured='<div class="featured">Featured</div>'}
return `<a href="/article/${config.link}"  class="card mb-4 anchor-underline-0">
      <div class="pic">${featured}<img class="card-img-top img-fluid" src="/media/${config.image}" onerror="this.src='/media/images/articles/default.png'" alt="{config.heading}"></div>
        <div class="card-body  text-dark font-weight-normal">
            <h6 class="card-title" style="text-decoration: none;">${config.heading}</h6>
            <p class="card-text">
            <small>${config.date}</small> <small>by ${config.author__name}</small>
            </p>
            <p class="text-formatting">${config.description}</p>
        </div>
    </a>`};var generateRow=function(category,articles){for(let i=0;i<articles.length;i++){console.log(articles[i]);var element=$.parseHTML(card({link:articles[i].link.toLowerCase(),heading:articles[i].heading,image:articles[i].image,author__name:articles[i].author__name,date:articles[i].date,description:articles[i].description,featured:articles[i].featured,}))[0];var elementmain=$('[data-parent="'+category+'"]')[0];$(element).appendTo(elementmain).hide().fadeIn(1500)}};$('.load-more-button').on('click',function(){var category=$(this).attr('data-category');var next=$(this).attr('data-next');_ajax('/index/',{'category__name':category,'next':next}).then(function(data){console.log(data);generateRow(category,data.data.articles);$('.load-more-button[data-category="'+category+'"]').attr('data-next',parseInt($('.load-more-button[data-category="'+category+'"]').attr('data-next'))+data.data.articles.length);if(parseInt($('.load-more-button[data-category="'+category+'"]').attr('data-next'))>=data.data.max){$('.load-more-button[data-category="'+category+'"]').addClass('d-none')}})});if($("#stickThis").length>0){$("#stickThis").stick_in_parent()}

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
$('#ihavedropdown').on('change',function () {
    var country = {"USD":"country","EUR":"country","GBP":"country","INR":"country","JPY":"country","CAD":"country","AUD":"country","BRL":"country","BGN":"country","CLP":"country","CNY":"country","HRK":"country","CZK":"country","DKK":"country","HKD":"country","HUF":"country","IDR":"country","ILS":"country","MYR":"country","MXN":"country","NZD":"country","NOK":"country","PKR":"country","PHP":"country","PLN":"country","RON":"country","RUB":"country","SGD":"country","ZAR":"country","KRW":"country","SEK":"country","CHF":"country","THB":"country","TRY":"country","AED":"country","UAH":"country"}
    var strVar="";
    strVar += "<option value=\"BTC\">Bitcoin (BTC)<\/option>";
    strVar += "<option value=\"ETH\">Ethereum (ETH)<\/option>";
    strVar += "<option value=\"XRP\">Ripple (XRP)<\/option>";
    strVar += "<option value=\"BCH\">Bitcoin Cash (BCH)<\/option>";
    strVar += "<option value=\"ADA\">Cardano (ADA)<\/option>";
    strVar += "<option value=\"LTC\"> Litecoin (LTC)<\/option>";
    strVar += "<option value=\"ZRX\">0x (ZRX)<\/option>";
    strVar += "<option value=\"ACT\">Achain (ACT)<\/option>";
    strVar += "<option value=\"ADX\">AdEx (ADX)<\/option>";
    strVar += "<option value=\"ADST\">AdShares (ADST)<\/option>";
    strVar += "<option value=\"ADT\">adToken (ADT)<\/option>";
    strVar += "<option value=\"ELF\">aelf (ELF)<\/option>";
    strVar += "<option value=\"AEON\">Aeon (AEON)<\/option>";
    strVar += "<option value=\"ARN\">Aeron (ARN)<\/option>";
    strVar += "<option value=\"AE\">Aeternity (AE)<\/option>";
    strVar += "<option value=\"AGRS\">Agoras Tokens (AGRS)<\/option>";
    strVar += "<option value=\"DLT\">Agrello (DLT)<\/option>";
    strVar += "<option value=\"AION\">Aion (AION)<\/option>";
    strVar += "<option value=\"AST\">AirSwap (AST)<\/option>";
    strVar += "<option value=\"AIR\">AirToken (AIR)<\/option>";
    strVar += "<option value=\"ALIS\">ALIS (ALIS)<\/option>";
    strVar += "<option value=\"ALT\">Altcoin (ALT)<\/option>";
    strVar += "<option value=\"AMB\">Ambrosus (AMB)<\/option>";
    strVar += "<option value=\"ANT\">Aragon (ANT)<\/option>";
    strVar += "<option value=\"ARDR\">Ardor (ARDR)<\/option>";
    strVar += "<option value=\"ARK\">Ark (ARK)<\/option>";
    strVar += "<option value=\"ABY\">ArtByte (ABY)<\/option>";
    strVar += "<option value=\"XAS\">Asch (XAS)<\/option>";
    strVar += "<option value=\"AC\">AsiaCoin (AC)<\/option>";
    strVar += "<option value=\"ATB\">ATBCoin (ATB)<\/option>";
    strVar += "<option value=\"ATL\">ATLANT (ATL)<\/option>";
    strVar += "<option value=\"ATM\">ATMChain (ATM)<\/option>";
    strVar += "<option value=\"ATMS\">Atmos (ATMS)<\/option>";
    strVar += "<option value=\"ADC\">AudioCoin (ADC)<\/option>";
    strVar += "<option value=\"REP\">Augur (REP)<\/option>";
    strVar += "<option value=\"AUR\">Auroracoin (AUR)<\/option>";
    strVar += "<option value=\"AVT\">Aventus (AVT)<\/option>";
    strVar += "<option value=\"B2B\">B2B (B2B)<\/option>";
    strVar += "<option value=\"BNT\">Bancor (BNT)<\/option>";
    strVar += "<option value=\"BAT\">Basic Attentintion Token (BAT)<\/option>";
    strVar += "<option value=\"BCAP\">BCAP (BCAP)<\/option>";
    strVar += "<option value=\"BITB\">Bean Cash (BITB)<\/option>";
    strVar += "<option value=\"BNB\">Binance Coin (BNB)<\/option>";
    strVar += "<option value=\"BIS\">Bismuth (BIS)<\/option>";
    strVar += "<option value=\"BAY\">BitBay (BAY)<\/option>";
    strVar += "<option value=\"CAT\">BitClave (CAT)<\/option>";
    strVar += "<option value=\"BTDX\">Bitcloud (BTDX)<\/option>";
    strVar += "<option value=\"BTG\">Bitcoin Gold (BTG)<\/option>";
    strVar += "<option value=\"XBC\">Bitcoin Plus (XBC)<\/option>";
    strVar += "<option value=\"BTCD\">BitcoinDark (BTCD)<\/option>";
    strVar += "<option value=\"BCC\">BitConnect (BCC)<\/option>";
    strVar += "<option value=\"BTX\">Bitcore (BTX)<\/option>";
    strVar += "<option value=\"BCY\">Bitcrystals (BCY)<\/option>";
    strVar += "<option value=\"BDL\">Bitdeal (BDL)<\/option>";
    strVar += "<option value=\"CSNO\">BitDice (CSNO)<\/option>";
    strVar += "<option value=\"BQ\">bitqy (BQ)<\/option>";
    strVar += "<option value=\"BSD\">BitSend (BSD)<\/option>";
    strVar += "<option value=\"BTS\">BitShares (BTS)<\/option>";
    strVar += "<option value=\"ZNY\">Bitzeny (ZNY)<\/option>";
    strVar += "<option value=\"BLK\">BlackCoin (BLK)<\/option>";
    strVar += "<option value=\"BMC\">Blackmoon Crypto (BMC)<\/option>";
    strVar += "<option value=\"BLITZ\">Blitzcash (BLITZ)<\/option>";
    strVar += "<option value=\"BCPT\">BlockMason Cr... (BCPT)<\/option>";
    strVar += "<option value=\"BLOCK\">Blocknet (BLOCK)<\/option>";
    strVar += "<option value=\"BPL\">Blockpool (BPL)<\/option>";
    strVar += "<option value=\"TIX\">Blocktix (TIX)<\/option>";
    strVar += "<option value=\"VEE\">BLOCKv (VEE)<\/option>";
    strVar += "<option value=\"BOT\">Bodhi (BOT)<\/option>";
    strVar += "<option value=\"BON\">Bonpay (BON)<\/option>";
    strVar += "<option value=\"AHT\">Bowhead (AHT)<\/option>";
    strVar += "<option value=\"BRD\">Bread (BRD)<\/option>";
    strVar += "<option value=\"BRK\">Breakout (BRK)<\/option>";
    strVar += "<option value=\"BWK\">Bulwark (BWK)<\/option>";
    strVar += "<option value=\"BURST\">Burst (BURST)<\/option>";
    strVar += "<option value=\"GBYTE\">Byteball Bytes (GBYTE)<\/option>";
    strVar += "<option value=\"BCN\">Bytecoin (BCN)<\/option>";
    strVar += "<option value=\"BTM\">Bytom (BTM)<\/option>";
    strVar += "<option value=\"CANN\">CannabisCoin (CANN)<\/option>";
    strVar += "<option value=\"CTR\">Centra (CTR)<\/option>";
    strVar += "<option value=\"LINK\">ChainLink (LINK)<\/option>";
    strVar += "<option value=\"CAG\">Change (CAG)<\/option>";
    strVar += "<option value=\"TIME\">Chronobank (TIME)<\/option>";
    strVar += "<option value=\"CND\">Cindicator (CND)<\/option>";
    strVar += "<option value=\"COVAL\">Circuits of V... (COVAL)<\/option>";
    strVar += "<option value=\"CVC\">Civic (CVC)<\/option>";
    strVar += "<option value=\"CLAM\">Clams (CLAM)<\/option>";
    strVar += "<option value=\"POLL\">ClearPoll (POLL)<\/option>";
    strVar += "<option value=\"CLOAK\">CloakCoin (CLOAK)<\/option>";
    strVar += "<option value=\"CFI\">Cofound.it (CFI)<\/option>";
    strVar += "<option value=\"CDT\">CoinDash (CDT)<\/option>";
    strVar += "<option value=\"COSS\">COSS (COSS)<\/option>";
    strVar += "<option value=\"XCP\">Counterparty (XCP)<\/option>";
    strVar += "<option value=\"CRAVE\">Crave (CRAVE)<\/option>";
    strVar += "<option value=\"CREA\">Creativecoin (CREA)<\/option>";
    strVar += "<option value=\"CRB\">Creditbit (CRB)<\/option>";
    strVar += "<option value=\"CREDO\">Credo (CREDO)<\/option>";
    strVar += "<option value=\"CRC\">CrowdCoin (CRC)<\/option>";
    strVar += "<option value=\"CRW\">Crown (CRW)<\/option>";
    strVar += "<option value=\"CNX\">Cryptonex (CNX)<\/option>";
    strVar += "<option value=\"CURE\">Curecoin (CURE)<\/option>";
    strVar += "<option value=\"CMT\">CyberMiles (CMT)<\/option>";
    strVar += "<option value=\"BET\">DAO.Casino (BET)<\/option>";
    strVar += "<option value=\"DASH\">Dash (DASH)<\/option>";
    strVar += "<option value=\"DTB\">Databits (DTB)<\/option>";
    strVar += "<option value=\"DAT\">Datum (DAT)<\/option>";
    strVar += "<option value=\"DCT\">DECENT (DCT)<\/option>";
    strVar += "<option value=\"DBET\">DecentBet (DBET)<\/option>";
    strVar += "<option value=\"MANA\">Decentraland (MANA)<\/option>";
    strVar += "<option value=\"HST\">Decision Token (HST)<\/option>";
    strVar += "<option value=\"DCR\">Decred (DCR)<\/option>";
    strVar += "<option value=\"ONION\">DeepOnion (ONION)<\/option>";
    strVar += "<option value=\"DPY\">Delphy (DPY)<\/option>";
    strVar += "<option value=\"DENT\">Dent (DENT)<\/option>";
    strVar += "<option value=\"DCN\">Dentacoin (DCN)<\/option>";
    strVar += "<option value=\"DMD\">Diamond (DMD)<\/option>";
    strVar += "<option value=\"DGB\">DigiByte (DGB)<\/option>";
    strVar += "<option value=\"XDN\">DigitalNote (XDN)<\/option>";
    strVar += "<option value=\"DGD\">DigixDAO (DGD)<\/option>";
    strVar += "<option value=\"DIME\">Dimecoin (DIME)<\/option>";
    strVar += "<option value=\"DNT\">district0x (DNT)<\/option>";
    strVar += "<option value=\"DIVX\">Divi (DIVX)<\/option>";
    strVar += "<option value=\"DOGE\">Dogecoin (DOGE)<\/option>";
    strVar += "<option value=\"DRT\">DomRaider (DRT)<\/option>";
    strVar += "<option value=\"DOPE\">DopeCoin (DOPE)<\/option>";
    strVar += "<option value=\"DOT\">Dotcoin (DOT)<\/option>";
    strVar += "<option value=\"DRGN\">Dragonchain (DRGN)<\/option>";
    strVar += "<option value=\"DBIX\">DubaiCoin (DBIX)<\/option>";
    strVar += "<option value=\"DTR\">Dynamic Tradi... (DTR)<\/option>";
    strVar += "<option value=\"ECN\">E-coin (ECN)<\/option>";
    strVar += "<option value=\"EDR\">E-Dinar Coin (EDR)<\/option>";
    strVar += "<option value=\"ECOB\">Ecobit (ECOB)<\/option>";
    strVar += "<option value=\"EDG\">Edgeless (EDG)<\/option>";
    strVar += "<option value=\"EDO\">Eidoo (EDO)<\/option>";
    strVar += "<option value=\"EMC2\">Einsteinium (EMC2)<\/option>";
    strVar += "<option value=\"XEL\">Elastic (XEL)<\/option>";
    strVar += "<option value=\"ETN\">Electroneum (ETN)<\/option>";
    strVar += "<option value=\"ELIX\">Elixir (ELIX)<\/option>";
    strVar += "<option value=\"EMC\">Emercoin (EMC)<\/option>";
    strVar += "<option value=\"DNA\">EncrypGen (DNA)<\/option>";
    strVar += "<option value=\"ETT\">EncryptoTel [... (ETT)<\/option>";
    strVar += "<option value=\"ENRG\">Energycoin (ENRG)<\/option>";
    strVar += "<option value=\"ENG\">Enigma (ENG)<\/option>";
    strVar += "<option value=\"ENJ\"> Coin (ENJ)<\/option>";
    strVar += "<option value=\"EOS\">EOS (EOS)<\/option>";
    strVar += "<option value=\"ESP\">Espers (ESP)<\/option>";
    strVar += "<option value=\"ETC\">Ethereum Classic (ETC)<\/option>";
    strVar += "<option value=\"DICE\">Etheroll (DICE)<\/option>";
    strVar += "<option value=\"FUEL\">Etherparty (FUEL)<\/option>";
    strVar += "<option value=\"LEND\">ETHLend (LEND)<\/option>";
    strVar += "<option value=\"ETHOS\">Ethos (ETHOS)<\/option>";
    strVar += "<option value=\"EVX\">Everex (EVX)<\/option>";
    strVar += "<option value=\"XUC\">Exchange Union (XUC)<\/option>";
    strVar += "<option value=\"EXP\">Expanse (EXP)<\/option>";
    strVar += "<option value=\"FCT\">Factom (FCT)<\/option>";
    strVar += "<option value=\"FAIR\">FairCoin (FAIR)<\/option>";
    strVar += "<option value=\"FTC\">Feathercoin (FTC)<\/option>";
    strVar += "<option value=\"1ST\">FirstBlood (1ST)<\/option>";
    strVar += "<option value=\"FRST\">FirstCoin (FRST)<\/option>";
    strVar += "<option value=\"FLASH\">Flash (FLASH)<\/option>";
    strVar += "<option value=\"FLIXX\">Flixxo (FLIXX)<\/option>";
    strVar += "<option value=\"FLO\">FlorinCoin (FLO)<\/option>";
    strVar += "<option value=\"FYP\">FlypMe (FYP)<\/option>";
    strVar += "<option value=\"FLDC\">FoldingCoin (FLDC)<\/option>";
    strVar += "<option value=\"FUN\">FunFair (FUN)<\/option>";
    strVar += "<option value=\"GAM\">Gambit (GAM)<\/option>";
    strVar += "<option value=\"GAME\">GameCredits (GAME)<\/option>";
    strVar += "<option value=\"GAS\">Gas (GAS)<\/option>";
    strVar += "<option value=\"GVT\">Genesis Vision (GVT)<\/option>";
    strVar += "<option value=\"GEO\">GeoCoin (GEO)<\/option>";
    strVar += "<option value=\"GTO\">Gifto (GTO)<\/option>";
    strVar += "<option value=\"GCR\">Global Curren... (GCR)<\/option>";
    strVar += "<option value=\"GNO\">Gnosis (GNO)<\/option>";
    strVar += "<option value=\"GBX\">GoByte (GBX)<\/option>";
    strVar += "<option value=\"GLD\">GoldCoin (GLD)<\/option>";
    strVar += "<option value=\"GNT\">Golem (GNT)<\/option>";
    strVar += "<option value=\"GOLOS\">Golos (GOLOS)<\/option>";
    strVar += "<option value=\"GRC\">GridCoin (GRC)<\/option>";
    strVar += "<option value=\"GRS\">Groestlcoin (GRS)<\/option>";
    strVar += "<option value=\"NLG\">Gulden (NLG)<\/option>";
    strVar += "<option value=\"GXS\">GXShares (GXS)<\/option>";
    strVar += "<option value=\"HKN\">Hacken (HKN)<\/option>";
    strVar += "<option value=\"HEAT\">HEAT (HEAT)<\/option>";
    strVar += "<option value=\"HDG\">Hedge (HDG)<\/option>";
    strVar += "<option value=\"HGT\">HelloGold (HGT)<\/option>";
    strVar += "<option value=\"THC\">HempCoin (THC)<\/option>";
    strVar += "<option value=\"PLAY\">HEROcoin (PLAY)<\/option>";
    strVar += "<option value=\"HVN\">Hive (HVN)<\/option>";
    strVar += "<option value=\"HSR\">Hshare (HSR)<\/option>";
    strVar += "<option value=\"HMQ\">Humaniq (HMQ)<\/option>";
    strVar += "<option value=\"HUSH\">Hush (HUSH)<\/option>";
    strVar += "<option value=\"HYP\">HyperStake (HYP)<\/option>";
    strVar += "<option value=\"IOC\">I\/O Coin (IOC)<\/option>";
    strVar += "<option value=\"ICX\">ICON (ICX)<\/option>";
    strVar += "<option value=\"ICN\">Iconomi (ICN)<\/option>";
    strVar += "<option value=\"ICOS\">ICOS (ICOS)<\/option>";
    strVar += "<option value=\"RLC\">iExec RLC (RLC)<\/option>";
    strVar += "<option value=\"INCNT\">Incent (INCNT)<\/option>";
    strVar += "<option value=\"INK\">Ink (INK)<\/option>";
    strVar += "<option value=\"INN\">Innova (INN)<\/option>";
    strVar += "<option value=\"IOP\">Internet of P... (IOP)<\/option>";
    strVar += "<option value=\"IFT\">InvestFeed (IFT)<\/option>";
    strVar += "<option value=\"ION\">ION (ION)<\/option>";
    strVar += "<option value=\"ITC\">IoT Chain (ITC)<\/option>";
    strVar += "<option value=\"MIOTA\">IOTA (MIOTA)<\/option>";
    strVar += "<option value=\"IXT\">iXledger (IXT)<\/option>";
    strVar += "<option value=\"KICK\">KickCoin (KICK)<\/option>";
    strVar += "<option value=\"KLC\">KiloCoin (KLC)<\/option>";
    strVar += "<option value=\"KMD\">Komodo (KMD)<\/option>";
    strVar += "<option value=\"KCS\">KuCoin Shares (KCS)<\/option>";
    strVar += "<option value=\"KNC\">Kyber Network (KNC)<\/option>";
    strVar += "<option value=\"PIX\">Lampix (PIX)<\/option>";
    strVar += "<option value=\"LA\">LAToken (LA)<\/option>";
    strVar += "<option value=\"LBC\">LBRY Credits (LBC)<\/option>";
    strVar += "<option value=\"LEO\">LEOcoin (LEO)<\/option>";
    strVar += "<option value=\"LIFE\">LIFE (LIFE)<\/option>";
    strVar += "<option value=\"LINDA\">Linda (LINDA)<\/option>";
    strVar += "<option value=\"LSK\">Lisk (LSK)<\/option>";
    strVar += "<option value=\"LOC\">LockChain (LOC)<\/option>";
    strVar += "<option value=\"LMC\">LoMoCoin (LMC)<\/option>";
    strVar += "<option value=\"LRC\">Loopring (LRC)<\/option>";
    strVar += "<option value=\"LUN\">Lunyr (LUN)<\/option>";
    strVar += "<option value=\"LUX\">LUXCoin (LUX)<\/option>";
    strVar += "<option value=\"ART\">Maecenas (ART)<\/option>";
    strVar += "<option value=\"MAID\">MaidSafeCoin (MAID)<\/option>";
    strVar += "<option value=\"MKR\">Maker (MKR)<\/option>";
    strVar += "<option value=\"MTNC\">Masternodecoin (MTNC)<\/option>";
    strVar += "<option value=\"GUP\">Matchpool (GUP)<\/option>";
    strVar += "<option value=\"MED\">MediBloc (MED)<\/option>";
    strVar += "<option value=\"MDS\">MediShares (MDS)<\/option>";
    strVar += "<option value=\"MLN\">Melon (MLN)<\/option>";
    strVar += "<option value=\"MEME\">Memetic \/ Pep... (MEME)<\/option>";
    strVar += "<option value=\"MER\">Mercury (MER)<\/option>";
    strVar += "<option value=\"MTL\">Metal (MTL)<\/option>";
    strVar += "<option value=\"ETP\">Metaverse ETP (ETP)<\/option>";
    strVar += "<option value=\"AMM\">MicroMoney (AMM)<\/option>";
    strVar += "<option value=\"MNX\">MinexCoin (MNX)<\/option>";
    strVar += "<option value=\"MINT\">Mintcoin (MINT)<\/option>";
    strVar += "<option value=\"MGO\">MobileGo (MGO)<\/option>";
    strVar += "<option value=\"MOD\">Modum (MOD)<\/option>";
    strVar += "<option value=\"MDA\">Moeda Loyalty... (MDA)<\/option>";
    strVar += "<option value=\"MCO\">Monaco (MCO)<\/option>";
    strVar += "<option value=\"MONA\">MonaCoin (MONA)<\/option>";
    strVar += "<option value=\"XMR\">Monero (XMR)<\/option>";
    strVar += "<option value=\"MUE\">MonetaryUnit (MUE)<\/option>";
    strVar += "<option value=\"MTH\">Monetha (MTH)<\/option>";
    strVar += "<option value=\"XMCC\">Monoeci (XMCC)<\/option>";
    strVar += "<option value=\"MOON\">Mooncoin (MOON)<\/option>";
    strVar += "<option value=\"MSP\">Mothership (MSP)<\/option>";
    strVar += "<option value=\"MUSIC\">Musicoin (MUSIC)<\/option>";
    strVar += "<option value=\"MYB\">MyBit Token (MYB)<\/option>";
    strVar += "<option value=\"XMY\">Myriad (XMY)<\/option>";
    strVar += "<option value=\"MYST\">Mysterium (MYST)<\/option>";
    strVar += "<option value=\"NGC\">NAGA (NGC)<\/option>";
    strVar += "<option value=\"NMC\">Namecoin (NMC)<\/option>";
    strVar += "<option value=\"NAV\">NAV Coin (NAV)<\/option>";
    strVar += "<option value=\"NEBL\">Neblio (NEBL)<\/option>";
    strVar += "<option value=\"NAS\">Nebulas (NAS)<\/option>";
    strVar += "<option value=\"XEM\">NEM (XEM)<\/option>";
    strVar += "<option value=\"NEO\">NEO (NEO)<\/option>";
    strVar += "<option value=\"NEOS\">NeosCoin (NEOS)<\/option>";
    strVar += "<option value=\"NEU\">Neumark (NEU)<\/option>";
    strVar += "<option value=\"NTRN\">Neutron (NTRN)<\/option>";
    strVar += "<option value=\"NYC\">NewYorkCoin (NYC)<\/option>";
    strVar += "<option value=\"NXC\">Nexium (NXC)<\/option>";
    strVar += "<option value=\"NXS\">Nexus (NXS)<\/option>";
    strVar += "<option value=\"NET\">Nimiq (NET)<\/option>";
    strVar += "<option value=\"NLC2\">NoLimitCoin (NLC2)<\/option>";
    strVar += "<option value=\"NVC\">Novacoin (NVC)<\/option>";
    strVar += "<option value=\"USNBT\">NuBits (USNBT)<\/option>";
    strVar += "<option value=\"NULS\">Nuls (NULS)<\/option>";
    strVar += "<option value=\"NMR\">Numeraire (NMR)<\/option>";
    strVar += "<option value=\"NSR\">NuShares (NSR)<\/option>";
    strVar += "<option value=\"NXT\">Nxt (NXT)<\/option>";
    strVar += "<option value=\"OAX\">OAX (OAX)<\/option>";
    strVar += "<option value=\"OBITS\">OBITS (OBITS)<\/option>";
    strVar += "<option value=\"ODN\">Obsidian (ODN)<\/option>";
    strVar += "<option value=\"OK\">OKCash (OK)<\/option>";
    strVar += "<option value=\"OMG\">OmiseGO (OMG)<\/option>";
    strVar += "<option value=\"OMNI\">Omni (OMNI)<\/option>";
    strVar += "<option value=\"OTN\">Open Trading ... (OTN)<\/option>";
    strVar += "<option value=\"ORME\">Ormeus Coin (ORME)<\/option>";
    strVar += "<option value=\"OXY\">Oxycoin (OXY)<\/option>";
    strVar += "<option value=\"PRL\">Oyster (PRL)<\/option>";
    strVar += "<option value=\"PAC\">PACcoin (PAC)<\/option>";
    strVar += "<option value=\"PND\">Pandacoin (PND)<\/option>";
    strVar += "<option value=\"PRG\">Paragon (PRG)<\/option>";
    strVar += "<option value=\"PART\">Particl (PART)<\/option>";
    strVar += "<option value=\"PTOY\">Patientory (PTOY)<\/option>";
    strVar += "<option value=\"PPC\">Peercoin (PPC)<\/option>";
    strVar += "<option value=\"PPY\">Peerplays (PPY)<\/option>";
    strVar += "<option value=\"PEPECASH\">Pepe Cash (PEPECASH)<\/option>";
    strVar += "<option value=\"PTC\">Pesetacoin (PTC)<\/option>";
    strVar += "<option value=\"PHR\">Phore (PHR)<\/option>";
    strVar += "<option value=\"PLR\">Pillar (PLR)<\/option>";
    strVar += "<option value=\"PINK\">PinkCoin (PINK)<\/option>";
    strVar += "<option value=\"PIRL\">Pirl (PIRL)<\/option>";
    strVar += "<option value=\"PIVX\">PIVX (PIVX)<\/option>";
    strVar += "<option value=\"PLU\">Pluton (PLU)<\/option>";
    strVar += "<option value=\"POE\">Po.et (POE)<\/option>";
    strVar += "<option value=\"PLBT\">Polybius (PLBT)<\/option>";
    strVar += "<option value=\"PPT\">Populous (PPT)<\/option>";
    strVar += "<option value=\"POSW\">PoSW Coin (POSW)<\/option>";
    strVar += "<option value=\"POT\">PotCoin (POT)<\/option>";
    strVar += "<option value=\"POWR\">Power Ledger (POWR)<\/option>";
    strVar += "<option value=\"PRS\">Presearch (PRS)<\/option>";
    strVar += "<option value=\"PST\">Primas (PST)<\/option>";
    strVar += "<option value=\"XPM\">Primecoin (XPM)<\/option>";
    strVar += "<option value=\"PRO\">Propy (PRO)<\/option>";
    strVar += "<option value=\"PBL\">Publica (PBL)<\/option>";
    strVar += "<option value=\"PURA\">Pura (PURA)<\/option>";
    strVar += "<option value=\"PURE\">Pure (PURE)<\/option>";
    strVar += "<option value=\"QASH\">QASH (QASH)<\/option>";
    strVar += "<option value=\"QTUM\">Qtum (QTUM)<\/option>";
    strVar += "<option value=\"QSP\">Quantstamp (QSP)<\/option>";
    strVar += "<option value=\"QAU\">Quantum (QAU)<\/option>";
    strVar += "<option value=\"QRL\">Quantum Resis... (QRL)<\/option>";
    strVar += "<option value=\"QWARK\">Qwark (QWARK)<\/option>";
    strVar += "<option value=\"RADS\">Radium (RADS)<\/option>";
    strVar += "<option value=\"XRB\">RaiBlocks (XRB)<\/option>";
    strVar += "<option value=\"RDN\">Raiden Networh (RDN)<\/option>";
    strVar += "<option value=\"RHOC\">RChain (RHOC)<\/option>";
    strVar += "<option value=\"RPX\">Red Pulse (RPX)<\/option>";
    strVar += "<option value=\"RDD\">ReddCoin (RDD)<\/option>";
    strVar += "<option value=\"REC\">Regalcoin (REC)<\/option>";
    strVar += "<option value=\"REQ\">Request Network (REQ)<\/option>";
    strVar += "<option value=\"R\">Revain (R)<\/option>";
    strVar += "<option value=\"XRL\">Rialto (XRL)<\/option>";
    strVar += "<option value=\"RCN\">Ripio Creditit Network (RCN)<\/option>";
    strVar += "<option value=\"RISE\">Rise (RISE)<\/option>";
    strVar += "<option value=\"RVT\">Rivetz (RVT)<\/option>";
    strVar += "<option value=\"RBY\">Rubycoin (RBY)<\/option>";
    strVar += "<option value=\"RC\">RussiaCoin (RC)<\/option>";
    strVar += "<option value=\"SAFEX\">Safe Exchange... (SAFEX)<\/option>";
    strVar += "<option value=\"SALT\">SALT (SALT)<\/option>";
    strVar += "<option value=\"SLS\">SaluS (SLS)<\/option>";
    strVar += "<option value=\"SAN\">Santiment Network (SAN)<\/option>";
    strVar += "<option value=\"SEQ\">Sequence (SEQ)<\/option>";
    strVar += "<option value=\"SHIFT\">Shift (SHIFT)<\/option>";
    strVar += "<option value=\"SC\">Siacoin (SC)<\/option>";
    strVar += "<option value=\"SIB\">SIBCoin (SIB)<\/option>";
    strVar += "<option value=\"OST\">Simple Token (OST)<\/option>";
    strVar += "<option value=\"SNGLS\">SingularDTV (SNGLS)<\/option>";
    strVar += "<option value=\"SKY\">Skycoin (SKY)<\/option>";
    strVar += "<option value=\"SMART\">SmartCash (SMART)<\/option>";
    strVar += "<option value=\"SNOV\">Snovio (SNOV)<\/option>";
    strVar += "<option value=\"SOAR\">Soarcoin (SOAR)<\/option>";
    strVar += "<option value=\"SEND\">Social Send (SEND)<\/option>";
    strVar += "<option value=\"SLR\">SolarCoin (SLR)<\/option>";
    strVar += "<option value=\"SNM\">SONM (SNM)<\/option>";
    strVar += "<option value=\"SPHTX\">SophiaTX (SPHTX)<\/option>";
    strVar += "<option value=\"XSPEC\">Spectrecoin (XSPEC)<\/option>";
    strVar += "<option value=\"SPHR\">Sphere (SPHR)<\/option>";
    strVar += "<option value=\"SPF\">SportyFi (SPF)<\/option>";
    strVar += "<option value=\"SPR\">SpreadCoin (SPR)<\/option>";
    strVar += "<option value=\"STA\">Starta (STA)<\/option>";
    strVar += "<option value=\"SNT\">Status (SNT)<\/option>";
    strVar += "<option value=\"XST\">Stealthcoin (XST)<\/option>";
    strVar += "<option value=\"STEEM\">Steem (STEEM)<\/option>";
    strVar += "<option value=\"SBD\">Steem Dollars (SBD)<\/option>";
    strVar += "<option value=\"XLM\">Stellar (XLM)<\/option>";
    strVar += "<option value=\"STORJ\">Storj (STORJ)<\/option>";
    strVar += "<option value=\"STORM\">Storm (STORM)<\/option>";
    strVar += "<option value=\"STX\">Stox (STX)<\/option>";
    strVar += "<option value=\"STRAT\">Stratis (STRAT)<\/option>";
    strVar += "<option value=\"DATA\">Streamr DATAcoin (DATA)<\/option>";
    strVar += "<option value=\"SUB\">Substratum (SUB)<\/option>";
    strVar += "<option value=\"SUMO\">Sumokoin (SUMO)<\/option>";
    strVar += "<option value=\"SNC\">SunContract (SNC)<\/option>";
    strVar += "<option value=\"SWT\">Swarm City (SWT)<\/option>";
    strVar += "<option value=\"SYNX\">Syndicate (SYNX)<\/option>";
    strVar += "<option value=\"AMP\">Synereo (AMP)<\/option>";
    strVar += "<option value=\"SNRG\">Synergy (SNRG)<\/option>";
    strVar += "<option value=\"SYS\">Syscoin (SYS)<\/option>";
    strVar += "<option value=\"TAAS\">TaaS (TAAS)<\/option>";
    strVar += "<option value=\"XTO\">Tao (XTO)<\/option>";
    strVar += "<option value=\"TGT\">Target Coin (TGT)<\/option>";
    strVar += "<option value=\"PAY\">TenX (PAY)<\/option>";
    strVar += "<option value=\"USDT\">Tether (USDT)<\/option>";
    strVar += "<option value=\"TNT\">Tierion (TNT)<\/option>";
    strVar += "<option value=\"TNB\">Time New Bank (TNB)<\/option>";
    strVar += "<option value=\"TKN\">TokenCard (TKN)<\/option>";
    strVar += "<option value=\"TX\">TransferCoin (TX)<\/option>";
    strVar += "<option value=\"TZC\">TrezarCoin (TZC)<\/option>";
    strVar += "<option value=\"TRIG\">Triggers (TRIG)<\/option>";
    strVar += "<option value=\"TRX\">TRON (TRX)<\/option>";
    strVar += "<option value=\"TFL\">TrueFlip (TFL)<\/option>";
    strVar += "<option value=\"UBQ\">Ubiq (UBQ)<\/option>";
    strVar += "<option value=\"UKG\">Unikoin Gold (UKG)<\/option>";
    strVar += "<option value=\"UNIT\">Universal Cur... (UNIT)<\/option>";
    strVar += "<option value=\"UNO\">Unobtanium (UNO)<\/option>";
    strVar += "<option value=\"XVC\">Vcash (XVC)<\/option>";
    strVar += "<option value=\"VEN\">VeChain (VEN)<\/option>";
    strVar += "<option value=\"XVG\">Verge (XVG)<\/option>";
    strVar += "<option value=\"VRC\">VeriCoin (VRC)<\/option>";
    strVar += "<option value=\"VERI\">Veritaseum (VERI)<\/option>";
    strVar += "<option value=\"VRM\">VeriumReserve (VRM)<\/option>";
    strVar += "<option value=\"VTC\">Vertcoin (VTC)<\/option>";
    strVar += "<option value=\"VIA\">Viacoin (VIA)<\/option>";
    strVar += "<option value=\"VIBE\">VIBE (VIBE)<\/option>";
    strVar += "<option value=\"VIB\">Viberate (VIB)<\/option>";
    strVar += "<option value=\"VIVO\">VIVO (VIVO)<\/option>";
    strVar += "<option value=\"VOISE\">Voise (VOISE)<\/option>";
    strVar += "<option value=\"VOX\">Voxels (VOX)<\/option>";
    strVar += "<option value=\"VSX\">Vsync (VSX)<\/option>";
    strVar += "<option value=\"WABI\">WaBi (WABI)<\/option>";
    strVar += "<option value=\"WGR\">Wagerr (WGR)<\/option>";
    strVar += "<option value=\"WTC\">Walton (WTC)<\/option>";
    strVar += "<option value=\"WAVES\">Waves (WAVES)<\/option>";
    strVar += "<option value=\"WCT\">Waves Communi... (WCT)<\/option>";
    strVar += "<option value=\"WAX\">WAX (WAX)<\/option>";
    strVar += "<option value=\"TRST\">WeTrust (TRST)<\/option>";
    strVar += "<option value=\"XWC\">WhiteCoin (XWC)<\/option>";
    strVar += "<option value=\"WILD\">Wild Crypto (WILD)<\/option>";
    strVar += "<option value=\"WINGS\">Wings (WINGS)<\/option>";
    strVar += "<option value=\"WRC\">Worldcore (WRC)<\/option>";
    strVar += "<option value=\"XAUR\">Xaurum (XAUR)<\/option>";
    strVar += "<option value=\"XGOX\">XGOX (XGOX)<\/option>";
    strVar += "<option value=\"XBY\">XTRABYTES (XBY)<\/option>";
    strVar += "<option value=\"YOYOW\">YOYOW (YOYOW)<\/option>";
    strVar += "<option value=\"ZEC\">Zcash (ZEC)<\/option>";
    strVar += "<option value=\"ZCL\">ZClassic (ZCL)<\/option>";
    strVar += "<option value=\"XZC\">ZCoin (XZC)<\/option>";
    strVar += "<option value=\"ZEN\">ZenCash (ZEN)<\/option>";
    strVar += "<option value=\"ZER\">Zero (ZER)<\/option>";
    strVar += "<option value=\"ZSC\">Zeusshield (ZSC)<\/option>";
    strVar += "<option value=\"ZOI\">Zoin (ZOI)<\/option>";
    var strVar1="";
    strVar1 += "<option value=\"\">Search Currency<\/option>";
    strVar1 += "<option value=\"USD\">United States Dollar (USD)<\/option>";
    strVar1 += "<option value=\"EUR\">Euro (EUR)<\/option>";
    strVar1 += "<option value=\"GBP\">British Pound (GBP)<\/option>";
    strVar1 += "<option value=\"INR\">Indian Rupee (INR)<\/option>";
    strVar1 += "<option value=\"JPY\">Japanese Yen (JPY)<\/option>";
    strVar1 += "<option value=\"CAD\">Canadian Dollar (CAD)<\/option>";
    strVar1 += "<option value=\"AUD\">Australian Dollar (AUD)<\/option>";
    strVar1 += "<option value=\"BRL\">Brazilian Real (BRL)<\/option>";
    strVar1 += "<option value=\"BGN\">Bulgarian Lev (BGN)<\/option>";
    strVar1 += "<option value=\"CLP\">Chilean Peso (CLP)<\/option>";
    strVar1 += "<option value=\"CNY\">Chinese Yuan Renminbi (CNY)<\/option>";
    strVar1 += "<option value=\"HRK\">Croatian Kuna (HRK)<\/option>";
    strVar1 += "<option value=\"CZK\">Czech Koruna (CZK)<\/option>";
    strVar1 += "<option value=\"DKK\">Danish Krone (DKK)<\/option>";
    strVar1 += "<option value=\"HKD\">Hong Kong Dollar (HKD)<\/option>";
    strVar1 += "<option value=\"HUF\">Hungarian Forint (HUF)<\/option>";
    strVar1 += "<option value=\"IDR\">Indonesian Rupiah (IDR)<\/option>";
    strVar1 += "<option value=\"ILS\">Israeli New Shekel (ILS)<\/option>";
    strVar1 += "<option value=\"MYR\">Malaysian Ringgit (MYR)<\/option>";
    strVar1 += "<option value=\"MXN\">Mexican Peso (MXN)<\/option>";
    strVar1 += "<option value=\"NZD\">New Zealand Dollar (NZD)<\/option>";
    strVar1 += "<option value=\"NOK\">Norwegian Krone (NOK)<\/option>";
    strVar1 += "<option value=\"PKR\">Pakistani Rupee (PKR)<\/option>";
    strVar1 += "<option value=\"PHP\">Philippine Peso (PHP)<\/option>";
    strVar1 += "<option value=\"PLN\">Polish Zloty (PLN)<\/option>";
    strVar1 += "<option value=\"RON\">Romanian Leu (RON)<\/option>";
    strVar1 += "<option value=\"RUB\">Russian Ruble (RUB)<\/option>";
    strVar1 += "<option value=\"SGD\">Singapore Dollar (SGD)<\/option>";
    strVar1 += "<option value=\"ZAR\">South African Rand (ZAR)<\/option>";
    strVar1 += "<option value=\"KRW\">South Korean Won (KRW)<\/option>";
    strVar1 += "<option value=\"SEK\">Swedish Krona (SEK)<\/option>";
    strVar1 += "<option value=\"CHF\">Swiss Franc (CHF)<\/option>";
    strVar1 += "<option value=\"THB\">Thai Baht (THB)<\/option>";
    strVar1 += "<option value=\"TRY\">Turkish Lira (TRY)<\/option>";
    strVar1 += "<option value=\"AED\">UAE Dirham (AED)<\/option>";
    strVar1 += "<option value=\"UAH\">Ukrainian Hryvnia (UAH)<\/option>";

    var dropdown_value = $('#ihavedropdown').val()
    if(country[dropdown_value]){

        $('#iwantdropdown').html(strVar)

    }
    else {
        $('#iwantdropdown').html(strVar1+strVar)
    }



})

$('#exchangeform').on('submit', function(event) {
    event.preventDefault();
    // gtag('event', 'scanexchange');
    // fbq('track', 'scanexchange');
    exchangeAPI();
})

function exchangeAPI() {
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
        $('#amount').addClass('is-invalid');
    }

    if (!toCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('is-invalid');

    }

    if (!fromCurrency) {
        $('#ihavedropdown').parent().find('.select2').addClass('is-invalid');

    }

    if (toCurrency == fromCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('is-invalid');
        $('#ihavedropdown').parent().find('.select2').addClass('is-invalid');
    }

    var input_data = {
        toCurrency: $('#iwantdropdown').val(),
        fromCurrency: $('#ihavedropdown').val(),
        amount: $('#amount').val()
    }

    if (amount && toCurrency && fromCurrency && toCurrency != fromCurrency) {

        _ajax(window.location.origin + '/exchange/',input_data).then(function (data) {
            if (data.conversion_amount == ''){

                // $("#wantVal").val('');
                $("#wantVal #from").html('');
                $("#wantVal #to").html('');
                $("#wantVal #message").html('No currency or exchange.');
                $('#comparisonTable').show();
                $('.no_data').show();
            }

            if (resultCount = data.data.length) {

                $("#wantVal #from").html($('#amount').val() + ' ' + $('#ihavedropdown').val() + '=');
                $("#wantVal #to").html(data.conversion_amount + ' ' + $('#iwantdropdown').val());
                $("#wantVal #message").html('See below for more information');
                $("#wantVal").show();

                // document.getElementById("wantVal").value = data.conversion_amount;

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
                $('#comparisonTable').show();
                $('.no_data').show();
                $('#price-table').hide();
                $('#pagination').hide();
            }
        })


        $('#iwantdropdown').parent().find('.select2').removeClass('is-invalid');
        $('#ihavedropdown').parent().find('.select2').removeClass('is-invalid');
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
            var data=result[i];
            console.log(data);
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

var _trumbowyg = $('.article').trumbowyg({
    btnsDef: {
        // Create a new dropdown
        // image: {
        //     dropdown: ['insertImage', 'upload'],
        //     ico: 'insertImage'
        // }
    },
    // Redefine the button pane
    btns: [
        ['viewHTML'],
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        // ['image'], // Our fresh created dropdown
        ['upload'], // Our fresh created dropdown
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ],
    plugins: {
        // Add imagur parameters to upload plugin for demo purposes
        upload: {
            serverPath: 'https://api.imgur.com/3/image',
            fileFieldName: 'image',
            headers: {
                'Authorization': 'Client-ID ebc904b5d231a57'
            },
            urlPropertyName: 'data.data.link',
            success: function (data, _trumbowyg, $modal, values) {

                console.log(data);
                console.log(data.data.link);
                console.log(_trumbowyg);
                console.log($modal);
                console.log(values);
                $('.article').append($('<img src="'+data.data.link+'" />'));
                $($modal).hide();
            }
        },
        resizimg : {
          minSize: 64,
          step: 16,
        }
    }
});

$('#tags').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#categories').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#author').selectize({
    create: true,
    sortField: 'text'
});
$('.form-check-input').on('click',function() { $(this).attr('value', !$.parseJSON($(this).val())); });




// //on button click
// vanilla.result('blob').then(function(blob) {
//     // do something with cropped blob
// });

var $uploadCrop;

$uploadCrop = $('.image-preview').croppie({
    viewport: { width: 800, height: 500 },
    showZoomer: false,
    enableOrientation: false,
    enableExif: true
});

function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-preview').addClass('ready');
            $uploadCrop.croppie('bind', {
                url: e.target.result
            }).then(function(){
                console.log('jQuery bind complete');
                $('.upload-result').text('Save');
                $('.upload-result').removeAttr('disabled');
            });
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

$('#customFile').on('change', function () {
    readFile(this);
});

$('.upload-result').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        console.log(resp);
        $('[name="image"]').val(resp);
        $('.upload-result').text('Saved');
        $('.upload-result').attr('disabled','disabled');
    });
});


$(document).ready(function() {
    $("#articleDescription").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 50) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 50).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(50-words);
        }
    });
 });