from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.postgres.search import SearchVector, SearchRank, SearchVector

from articles.models import Article, Category, Author, Tag, FeatureRequests, Subscribers, GainerLoser
import requests,json
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import os
import urllib
from website.settings import BASE_DIR
# import the logging library
import logging
from django.views.decorators.csrf import csrf_protect

# from django.views.decorators.cache import cache_page

# Get an instance of a logger
logger = logging.getLogger(__name__)

def waiter(n=3):
    # time.sleep(random.randint(1,n))
    return True

carousel_categories = Category.objects.exclude(name='Latest Cryptocurrency News')
#
top_gainer = GainerLoser.objects.filter(category='Top Gainer')
top_loser = GainerLoser.objects.filter(category='Top Loser')
top_gainer = top_gainer.__dict__
top_loser = top_loser.__dict__

logger.debug('########################## TOP GAINER ##############################')
# logger.debug(top_gainer.currency_name)

cache_time_limit = 60 * 5

# @cache_page(cache_time_limit)
@csrf_protect
@csrf_exempt

def index(request):
    articles = list()
    imagefit_article='420x300,C'
    imagefit_featured='800x600,C'

    if request.user_agent.is_pc:
        imagefit_article = '720x350,C'
        imagefit_featured = '1080x600,C'
    elif request.user_agent.is_mobile:
        imagefit_article = '480x300,C'
        imagefit_featured = '720x400,C'
    elif request.user_agent.is_tablet:
        imagefit_article = '205x154,C'
        imagefit_featured = '768x420,C'
    elif request.user_agent.is_touch_capable:
        imagefit_article = '270x208,C'
        imagefit_featured = '660x420,C'


    if request.method == 'POST':
        data = json.loads(request.body)
        current_category = Category.objects.get(name=data['category__name'])
        start = int(data['next'])
        # logger.debug(start)
        if current_category.name == 'Latest Cryptocurrency News':
            articles = articles_by_date_descending_values(limit=2, start=start)
            max = Article.objects.all().count()
        else:
            articles = articles_by_category_values(current_category, limit=2, start=start)
            max = Article.objects.filter(categories__in=[current_category]).count()
        return JsonResponse({
            'data': {
                'articles': articles,
                'max': max
            }
        })


    categories = Category.objects.filter(name__in=[
        'Bitcoin News', 'Ethereum News', 'Top 10 Cryptocurrency News', 'Altcoin Cryptocurrency News'
    ])

    latest_articles = articles_by_date_descending_values(limit=2, start=0)
    if len(latest_articles) > 0:
        data = dict()
        data['Latest Cryptocurrency News'] = latest_articles
        articles.append(data)

    for category in categories:
        data = dict()
        data[category.name] = articles_by_category_values(category, limit=2, start=0)
        articles.append(data)

    return render(request, 'website/index.html', {
        'categories': carousel_categories,
        'featured_articles_overall': featured_articles_overall(),
        'categories__articles': articles,
        'latest_articles':articles_by_date_descending_values(limit=3, start=0),
        # 'top_gainer': top_gainer,
        # 'top_loser': top_loser,
        'imagefit_article':imagefit_article,
        'imagefit_featured':imagefit_featured
    })

# @cache_page(cache_time_limit)
@csrf_protect
@csrf_exempt
def categories(request):
    waiter()

    imagefit_featured = '800x600,C'

    if request.user_agent.is_pc:

        imagefit_featured = '1080x600,C'
    elif request.user_agent.is_mobile:

        imagefit_featured = '720x400,C'
    elif request.user_agent.is_tablet:

        imagefit_featured = '768x420,C'
    elif request.user_agent.is_touch_capable:

        imagefit_featured = '660x420,C'

    if request.method == 'POST':
        data = json.loads(request.body)
        current_category = Category.objects.get(name=data['category__name'])
        start = int(data['next'])

        if current_category.name == 'Latest Cryptocurrency News':
            articles = articles_by_date_descending_values(limit=3, start=start)
        else:
            articles = articles_by_category_values(current_category, limit=3, start=start)
        return JsonResponse({
            'data': {
                'articles': articles,
            }
        })


    # current_category = request.GET.get('category', Category.objects.get(name='Latest Cryptocurrency News').id)
    get_url = request.get_full_path()
    try:
        current_category = get_url.split('/articles/')[-1].replace('-',' ')
        current_category = current_category.split('?fbclid')[0]
        current_category = Category.objects.get(name__icontains=current_category).name
    except:
        current_category = ''

    if current_category=='' or current_category == None:
        current_category = Category.objects.last().name
    try:
        current_category = Category.objects.get(name=current_category)
    except Exception:
        return render(request, 'website/404.html', {})


    if current_category.name == 'Latest Cryptocurrency News':
        articles = articles_by_date_descending_values(limit=3, start=0)
        max = Article.objects.all().count()
        featured_articles = featured_articles_overall()
    else:
        articles = articles_by_category_values(current_category, limit=3, start=0)
        max = Article.objects.filter(categories__in=[current_category]).count()
        featured_articles = featured_articles_by_category(current_category)

    return render(request, 'website/category.html', {
        'current_category': current_category.name,
        'categories': carousel_categories,
        'featured_articles_overall': featured_articles,
        'articles': articles,
        'max': max,
        'imagefit_featured':imagefit_featured,
    })

# @cache_page(cache_time_limit)
def tag(request):
    waiter()
    get_url = request.get_full_path()
    try:
        current_tag =get_url.split('/tag/')[-1]
        current_tag =current_tag.replace('-', ' ')
        current_tag = Tag.objects.get(name__iexact=current_tag)
        current_tag = current_tag.id

    except:
        current_tag = ''

    try:
        current_tag = Tag.objects.last() if current_tag == '' else Tag.objects.get(id=current_tag)
    except Exception as e:
        return render(request, 'website/404.html', {})

    articles = Article.objects.filter(tags__in=[current_tag])

    page = request.GET.get('page', 1)
    paginator = Paginator(articles, 4)

    try:
        articles = paginator.page(page)
    except PageNotAnInteger:
        articles = paginator.page(1)
    except EmptyPage:
        articles = paginator.page(paginator.num_pages)

    return render(request, 'website/tags.html', {
        'categories': carousel_categories,
        'latest_articles': Article.objects.filter(tags__in=[current_tag]).order_by('-date', '-id')[:3],
        'articles': articles,
        'top_gainer': top_gainer,
        'top_loser': top_loser,
    })

# @cache_page(cache_time_limit)
@csrf_exempt
def article(request):
    waiter()

    try:
        logger.debug(request.path_info)
    except Exception:
        pass
    if request.GET.get('article') is not None:
        current_article = request.GET.get('article', Article.objects.last().link)
        page = request.GET.get('page', 1)
    else:
        get_url = request.get_full_path()

        logger.debug('Initial Article Link :: {0}'.format(get_url))

        current_article = get_url.split('/article/')[-1]

        try:
            current_article = urllib.unquote(current_article).decode('utf8')
            splitted_url = current_article.split('&page=')
            page = int(splitted_url[1])
            current_article = splitted_url[0]
            current_article = current_article.replace(' ','-')
        except Exception as e:
            page = 1
    try:
        current_article = current_article.split('?fbclid=')[0]
        logger.debug(current_article)
    except Exception as e:
        logger.debug('Error Removing ?fbclid :: {0}'.format(e))

    if current_article == None or current_article == '':
        current_article = Article.objects.last().link

    logger.debug('Final Article Link :: {0}'.format(current_article))

    try:
        current_article = Article.objects.get(link__icontains=current_article).link
    except Exception as e:
        print(e)

    if not Article.objects.filter(link__icontains=current_article).exists():
        return render(request, 'website/404.html')

    articles = Article.objects.extra(
        select={
            'is_top': 'link = %s'
        },
        select_params=(current_article,),
    ).order_by('-is_top', '-date', '-id')

    paginator = Paginator(articles, 1)
    try:
        articles = paginator.page(page)
    except PageNotAnInteger:
        articles = paginator.page(1)
    except EmptyPage:
        articles = paginator.page(paginator.num_pages)

    # current_article = current_article.replace('-', ' ')

    meta = Article.objects.filter(link__icontains=current_article)[0] if len(Article.objects.filter(link__icontains=current_article)) > 0 else None

    return render(request, 'website/article.html', {
        'categories': carousel_categories,
        'latest_articles': articles_by_date_descending_values(limit=3, start=0),
        'articles': articles,
        'meta': meta,
        'current_article': current_article,
        'top_gainer': top_gainer,
        'top_loser': top_loser,
    })


# @cache_page(cache_time_limit)
@csrf_exempt
def article_author(request):
    if request.is_ajax():
        # author__name = request.GET.get('article__author')
        data = json.loads(request.body)
        start = int(data['next'])
        author__name = data['article__author']
        # logger.debug(start)


        articles = articles_by_author_name_values(author__name=author__name,limit=2, start=start)
        max = Article.objects.filter(author__name=author__name).count()
        return JsonResponse({
            'data': {
                'articles': articles,
                'max': max
            }
        })
    get_url = request.get_full_path()

    author__name = get_url.split('/author/')[-1]
    author__name = author__name.replace('-', ' ')

    if author__name == '' or author__name==None:
        author__name = Author.objects.last().name
    # if not request.GET.get('article__author'):
    #     return render(request, 'website/404.html')
    waiter()
    start = 0
    articles = articles_by_author_name_values(author__name=author__name, limit=4, start=start)
    author__detail = Author.objects.filter(name__icontains=author__name).values()
    return render(request, 'website/article_author.html', {
        'categories': carousel_categories,
        'latest_articles': articles_by_date_descending_values(limit=3, start=0),
        'articles': articles,
        # 'meta': Article.objects.filter(link=current_article)[0] if len(Article.objects.filter(link=current_article)) > 0 else None,
        # 'current_article': current_article,
        'top_gainer': top_gainer,
        'top_loser': top_loser,
        'author_details':author__detail[0]
    })


# @cache_page(cache_time_limit)
def feature_request(request):
    return render(request, 'website/feature-request.html', {
        'categories': carousel_categories,

    })

def featured_articles_by_category(category, limit=3, start=0):
    return Article.objects.filter(categories__in=[category], featured=True).distinct('date', 'id', 'heading').order_by('-date', '-id')[start:start + limit]
    # return list(Article.objects.filter(categories__in=[category], featured=True).distinct('date', 'id', 'heading').order_by('-date', '-id').values(
    #     'heading',
    #     'description',
    #     'image',
    #     'date',
    #     'link',
    #     'featured',
    #     'categories',
    #     'author__name',
    # )[start:start + limit])

def featured_articles_overall(limit=3, start=0):
    return Article.objects.filter(featured=True).distinct('date', 'id', 'heading').order_by('-date', '-id')[start:start + limit]
    # return list(Article.objects.filter(featured=True).distinct('date', 'id', 'heading').order_by('-date', '-id').values(
    #     'heading',
    #     'description',
    #     'image',
    #     'date',
    #     'link',
    #     'featured',
    #     'categories',
    #     'author__name',
    # )[start:start + limit])

def articles_by_date_descending_values(limit=2, start=0):
    return list(Article.objects.all().order_by('-date', '-id').values(
        'heading',
        'description',
        'image',
        'date',
        'featured',
        'link',
        'author__name',
    )[start:start+limit])

def articles_by_date_descending_objects(limit=2, start=0):
    return Article.objects.all().order_by('-date', '-id')[start:start+limit]

def articles_by_category_values(category, limit=2, start=0):
    return list(Article.objects.filter(categories__in=[category]).order_by('-date', '-id').values(
        'heading',
        'description',
        'image',
        'date',
        'link',
        'featured',
        'author__name',
    )[start:start+limit])

def articles_by_category_values_search(searchquery, limit=2, start=0):
    return list(Article.objects.annotate(search=SearchVector('heading'),).filter(search=searchquery).order_by('-date', '-id').values(
        'heading',
        'description',
        'image',
        'date',
        'link',
        'featured',
        'author__name',
    )[start:start+limit])



def articles_by_author_name_values(author__name, limit=2, start=0):
    return list(Article.objects.filter(author__name__icontains=author__name).order_by('-date', '-id').values(
        'heading',
        'description',
        'image',
        'date',
        'link',
        'featured',
        'author__name',
    )[start:start+limit])

def articles_by_categories(categories, limit=2, start=0):
    logger.debug(categories)
    return list(Article.objects.filter(categories__in=categories).order_by('-date', '-id').values(
        'heading',
        'description',
        'image',
        'date',
        'featured',
        'link',
        'author__name',
    )[start:start+limit])

from django.contrib.auth.decorators import login_required

@login_required(login_url='/login/')
@csrf_exempt
def editor(request):
    # if request.is_authorised():
    if request.method == 'POST':
        data = dict()
        for key, value in request.POST.items():
            if key != 'csrfmiddlewaretoken':
                data[key] = value
        categories = data['categories'].split(',')
        data['categories'] = list()
        for cat in categories:
            cat, created = Category.objects.get_or_create(name=cat)
            data['categories'].append(cat.id)
        tags = data['tags'].split(',')
        data['tags'] = list()
        for tag in tags:
            tag, created = Tag.objects.get_or_create(name=tag)
            data['tags'].append(tag)

        author, created = Author.objects.get_or_create(name=data['author'])

        data['author'] = author

        data['link'] = str(1 if Article.objects.last() is None else Article.objects.last().id + 1) + '-' + data['heading'].lower().replace(' ','-')

        data['priority'] = 0

        data['featured'] = True if data.has_key('featured') and data['featured'] == 'true' else False

        article, created = Article.objects.get_or_create(
            author=data['author'],
            heading=data['heading'],
            description=data['description'],
            content=data['content'],
            image=data['image'],
            date=data['date'],
            categories=data['categories'],
            link=data['link'],
            priority=data['priority'],
            featured=data['featured']
        )
        article.tags = data['tags']
        article.save()
    default_image = ''

    with open(os.path.join(BASE_DIR, 'default_image.txt')) as f:
        default_image = f.read()
    return render(request, 'website/article.html', {
        'categories': ",".join(Category.objects.values_list('name', flat=True)),
        'tags': ",".join(Tag.objects.values_list('name', flat=True)),
        'authors': Author.objects.values_list('name', flat=True),
        'default_image': default_image
    })

@csrf_protect
def Subscribe(request):
    if request.is_ajax():
        try:
            data = json.loads(request.body)
            email = data['email']
            obj, created = Subscribers.objects.get_or_create(email=email, source='Footer')
            obj.save()
            return JsonResponse({'data': 'success', 'message': 'Thanks for subscribing.'})
        except Exception as ee:
            print('Subscribe Form Error',ee)
            JsonResponse({'data': 'success', 'message': ''})

@csrf_protect
@csrf_exempt
def NewsSubscribe(request):
    if request.is_ajax():
        try:
            data = json.loads(request.body)
            email = data['email']
            obj, created = Subscribers.objects.get_or_create(email=email, source=data['source'])
            obj.save()
            return JsonResponse({'data': 'success', 'message': 'Thanks for subscribing.'})
        except Exception as ee:
            print('Subscribe Form Error',ee)
            JsonResponse({'data': 'success', 'message': ''})

@csrf_protect
def Featured_request(request):
    if request.is_ajax():
        try:
            data = json.loads(request.body)
            email = data['email']
            name = data['name']
            subject = data['subject']
            description = data['message']

            obj = FeatureRequests()
            obj.name = name
            obj.email = email
            obj.subject = subject
            obj.description = description
            obj.save()

            return JsonResponse({'data': 'success', 'message': 'Thanks for your Request. We will get back to you'})
        except Exception as ee:
            print('Subscribe Form Error', ee)
            JsonResponse({'data': 'success', 'message': ''})

def CryptoExchange(request):
    if request.is_ajax():
        try:
            data = json.loads(request.body)

            amount = float(data['amount'])

            toCurrency = data['toCurrency']
            fromCurrency = data['fromCurrency']

            url = 'https://cryptoscanner.co:8180/getData.php'
            params = {"type": "calc", "amount": amount, "toCurrency": toCurrency, "fromCurrency": fromCurrency}

            r = requests.post(url, data=params)
            p = r.json()
            if len(p['result']) == 0:
                return JsonResponse(
                    {'status': 1, "data": [], 'conversion_amount': ''})

            _data = p['result']
            final_list = list()
            for c in _data:
                temp_list = list()
                t1 = c['conversion'][0]['pair']['from'] + ' to ' + c['conversion'][0]['pair']['to']
                t2 = c['conversion'][1]['pair']['from'] + ' to ' + c['conversion'][1]['pair']['to']
                t3 = 'https://cryptoscanner.co:8180/images/c-logos/' + c['conversion'][0]['company'] + '.png'
                t4 = 'https://cryptoscanner.co:8180/images/c-logos/' + c['conversion'][1]['company'] + '.png'
                tlink0 = c['conversion'][0]['company']
                tlink1 = c['conversion'][1]['company']
                link1 = company_link1(tlink0)
                link2 = company_link2(tlink1)

                # _t1 = str(c['conversion'][0]['rate']) + '  ' + c['conversion'][0]['pair']['from']
                _t1 = str("%.2f" % amount)+' '+fromCurrency
                _t2 = str(c['conversion'][1]['rate']) + '  ' + c['conversion'][1]['pair']['from']

                _t3 = str(c['conversion'][0]['unit_get']) + ' ' + c['conversion'][0]['pair']['to']
                _t4 = str(c['conversion'][1]['unit_get']) + ' ' + c['conversion'][1]['pair']['to']
                temp_list.append([t1, t2])
                temp_list.append([{'image': t3, 'link': link1}, {'image': t4, 'link': link2}])
                temp_list.append([_t1, _t3])
                temp_list.append([_t3, _t4])

                final_list.append(temp_list)

            return JsonResponse(
                {'status': 1, "data": final_list, 'conversion_amount': p['result'][0]['conversion'][1]['unit_get']})
        except Exception as e:
            print(e)
            return JsonResponse({
                'status': 0,
                'data': str(e)
            })
@csrf_exempt
def searchquery(request):

    waiter()

    if request.method == 'POST':
        data = json.loads(request.body)
        start = int(data['next'])
        searchquery = data['q']
        articles = articles_by_category_values_search( searchquery, limit=3, start=start)
        max = Article.objects.annotate(search=SearchVector('heading'), ).filter(search=searchquery)
        return JsonResponse({
            'data': {
                'articles': articles,
                "max":len(max)
            }
        })
    searchquery = request.GET.get('q')

    articles = articles_by_category_values_search( searchquery, limit=3, start=0)

    max = Article.objects.annotate(search=SearchVector('heading'),).filter(search=searchquery)


    return render(request, 'website/searchquery.html', {

        'categories': carousel_categories,

        'articles': articles,
        'max': len(max),
        "searchquery":searchquery
    })


def company_link1(company1):

    company1 = company1.lower()
    if company1 == '_1btcxe':
        company1 = "1btcxe"
    if company1 == "bitfinex2":
        company1 = "bitfinex"

    if company1 == "binance":
        link1 = "https://www.binance.com/?ref=11303298"

    elif company1 == "cryptopia":
        link1 = "https://www.cryptopia.co.nz/Register?referrer=dantheman28"

    elif company1 == "hitbtc":
        link1 = "https://hitbtc.com/?ref_id=5aa5459e4d0d5"

    elif company1 == "livecoin":
        link1 = "https://livecoin.net/?from=Livecoin-df63826Z"

    elif company1 == "lakebtc":
        link1 = "https://www.lakebtc.com/?ref=blortu"

    elif company1 == "vaultoro":
        link1 = "https://www.vaultoro.com/?a=109258"

    elif company1 == "bitbay":
        link1 = "http://bitbay.net"

    elif company1 == "liqui":
        link1 = "http://liqui.io"

    elif company1 == "dsx":
        link1 = "http://dsx.uk"

    elif company1 == "wex":
        link1 = "http://wex.nz"

    elif company1 == "getbtc":
        link1 = "http://getbtc.org"

    elif company1 == "gate":
        link1 = "http://gate.io"

    elif company1 == "c-cex":
        link1 = "http://c-cex.com"

    elif company1 == "acx":
        link1 = "http://acx.io"

    elif company1 == "okcoin":
        link1 = "https://www.okcoin.com"

    elif company1 == "kucoin":
        link1 = "https://www.kucoin.com/#/?r=MQJ3fR"

    else:
        link1 = "http://" + company1 + ".com"

    return link1

def company_link2(company2):
    company2 = company2.lower()

    if company2 == "bitfinex2":
        company2 = "bitfinex"

    if company2 == "binance":
        link2 = "https://www.binance.com/?ref=11303298"

    elif company2 == "cryptopia":
        link2 = "https://www.cryptopia.co.nz/Register?referrer=dantheman28"

    elif company2 == "hitbtc":
        link2 = "https://hitbtc.com/?ref_id=5aa5459e4d0d5"

    elif company2 == "livecoin":
        link2 = "https://livecoin.net/?from=Livecoin-df63826Z"

    elif company2 == "lakebtc":
        link2 = "https://www.lakebtc.com/?ref=blortu"

    elif company2 == "vaultoro":
        link2 = "https://www.vaultoro.com/?a=109258"

    elif company2 == "bitbay":
        link2 = "http://bitbay.net"

    elif company2 == "liqui":
        link2 = "http://liqui.io"

    elif company2 == "dsx":
        link2 = "http://dsx.uk"

    elif company2 == "wex":
        link2 = "http://wex.nz"

    elif company2 == "getbtc":
        link2 = "http://getbtc.org"

    elif company2 == "gate":
        link2 = "http://gate.io"

    elif company2 == "c-cex":
        link2 = "http://c-cex.com"

    elif company2 == "acx":
        link2 = "http://acx.io"

    elif company2 == "okcoin":
        link2 = "https://www.okcoin.com"

    elif company2 == "kucoin":
        link2 = "https://www.kucoin.com/#/?r=MQJ3fR"

    else:
        link2 = "http://" + company2 + ".com"
    return link2

def error404(request):

    return render(request, 'website/404.html')


def error_404(request):
    return render(request, 'website/404.html')

def verify_facebook(request):
    return render(request, 'website/rn5dven9ooa0jr58k0qg0aevzo9nt0.html')

def verify_sitemap(request):
    return render(request, 'website/sitemap.xml', content_type="application/xhtml+xml")

def verify_robots(request):
    return render(request, 'website/robots.txt', content_type="text/plain")

