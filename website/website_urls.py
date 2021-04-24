from django.conf.urls import url, include
from django.contrib import admin
from website import views
from login import views as loginviews
from .sitemaps import SitemapArticle,SitemapHome,SitemapCategory,SitemapTag,SitemapAuthor
from django.contrib.sitemaps.views import sitemap
from .article_search import article_search_view

sitemaps = {
    'posts': SitemapArticle,
    'static':SitemapHome,
    'categories':SitemapCategory,
    'categorytag':SitemapTag,
    'author':SitemapAuthor,
}
urlpatterns = [
    url(r'^articles/', views.editor, name='website__editor'),
    url(r'^tag/', views.tag, name='website__tag'),
    url(r'^articles/', views.categories, name='website__category'),
    url(r'^subscribe/', views.Subscribe),
    url(r'^news-email/', views.NewsSubscribe),
    url(r'^feature-request/', views.feature_request, name='website__featurerequest'),
    url(r'^article/', views.article, name='website__article'),
    url(r'^author/', views.article_author, name='website__article_author'),
    url(r'^index/', views.index, name='website__index_alternate'),
    url(r'^login/', loginviews.userlogin, name='login__userlogin'),
    url(r'^logout/', loginviews.userlogout, name='login__userlogout'),
    url(r'^rn5dven9ooa0jr58k0qg0aevzo9nt0.html$', views.verify_facebook, name='verify__facebook'),
    # url(r'^sitemap.xml$', views.verify_sitemap, name='verify__sitemap'),

    # url(r'^article/',views.post,name='article'),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
    url(r'^robots.txt$', views.verify_robots, name='verify__robots'),
    url(r'^fetured-request-form/', views.Featured_request,),
    url(r'^exchange/', views.CryptoExchange),
    url(r'^search/', views.searchquery),
    url(r'^$', views.index, name='website__index'),
    url(r'^(?!media|imagefit).*$', views.error404, name='error__404'),
]
