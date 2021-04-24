from django.contrib.sitemaps import Sitemap
from articles.models import Article, Category, Tag, Author
from django.urls import reverse


class SitemapArticle(Sitemap):
    def items(self):
        return Article.objects.all()

    def lastmod(self, obj):
        return obj.created_date

class SitemapHome(Sitemap):
    def items(self):
        return ['website__index']

    def location(self, item):
        return reverse(item)

class SitemapCategory(Sitemap):
    def items(self):
        return Category.objects.all()

    def lastmod(self, obj):
        return obj.created_at

class SitemapTag(Sitemap):
    def items(self):
        return Tag.objects.all()

    def lastmod(self, obj):
        try:
            add_date = Article.objects.get(tags=obj.id)
            return add_date.created_date
        except Exception as e:
            try:
                add_date = Article.objects.filter(tags=obj.id).values()
                return add_date[0]['created_date']
            except Exception as e:
                pass

class SitemapAuthor(Sitemap):
    def items(self):
        return Author.objects.all()

    def lastmod(self, obj):
        try:
            add_date = Article.objects.get(author_id=obj.id)

            return add_date.created_date
        except Exception as e:
            try:
                add_date = Article.objects.filter(author_id=obj.id).values()
                return add_date[0]['created_date']
            except Exception as e:
                pass