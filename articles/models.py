import datetime, re
from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField
from froala_editor.fields import FroalaField
from image_cropping import ImageRatioField
from uuid_upload_path import uuid
from django.utils import timezone
from datetime import timedelta


# Create your models here.

class Subscribers(models.Model):
    objects = None

    class Meta:
        verbose_name = 'Subscriber'
        verbose_name_plural = 'Subscribers'
    email = models.EmailField(max_length=250)
    source = models.CharField(max_length=500)
    def __str__(self):
        return f'{self.email} subscribed through {self.source}'

class FeatureRequests(models.Model):
    objects = None
    class Meta:
        verbose_name = 'FeatureRequest'
        verbose_name_plural = 'FeatureRequests'
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    subject = models.CharField(max_length=1000)
    description = models.TextField()
    created_on = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.email} made a request regarding "{self.subject}" on {self.created_on.date()}'

class Author(models.Model):
    objects = None
    image = models.ImageField(
        upload_to=f"images/authors/%Y/%m/%d/{uuid()}/", default="images/authors/default.png", null=True, blank=True
    )
    cropping = ImageRatioField('image', '200x200')  # size is "width x height"
    name = models.TextField(max_length=200, unique=True)
    description = models.TextField(max_length=200)

    def __str__(self):
        return f'{self.name}'

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        try:
            url = "/author/" + str(self.name).replace(' ', '-').lower()
        except:
            url = '/author/'
        return url

class Tag(models.Model):
    objects = None
    name = models.TextField(max_length=200, unique=True)

    def __str__(self):
        return f'{self.name}'

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):

        try:
            url = "/tag/"+str(self.name).replace(' ', '-').lower()
        except:
            url = "/tag/"
        return url

class Category(models.Model):
    objects = None
    image = models.ImageField(
        upload_to=f"images/categories/%Y/%m/%d/{uuid()}/",
        default="images/categories/default.png",
        null=True, blank=True
    )
    cropping = ImageRatioField('image', '400x200')  # size is "width x height"
    name = models.TextField(max_length=200, unique=True)
    description = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        try:
            url = "/articles/" + str(self.name).replace(' ', '-').lower()
        except:
            url = '/articles/'
        return url

class GainerLoser(models.Model):
    objects = None
    currency_name = models.CharField(max_length=100, null=False)
    currency_symbol = models.CharField(max_length=100, null=False)
    percentage_change = models.CharField(max_length=100, null=False)
    currency_change = models.CharField(max_length=100, null=False)
    category = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.category
def return_date_time():
    now = timezone.now()
    return now + timedelta(days=1)
class Article(models.Model):
    objects = None
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    heading = models.TextField(max_length=2000)
    image = models.ImageField(
        upload_to=f"images/articles/%Y/%m/%d/{uuid()}/",
        default="images/articles/default.png"
    )
    cropping = ImageRatioField('image', '700x500') # size is "width x height"
    description = models.TextField()
    content = FroalaField()
    date = models.DateField(default=return_date_time)
    priority = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    categories = models.ManyToManyField(Category)
    tags = models.ManyToManyField(Tag)
    link = models.TextField(default=None, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def get_tags(self):
        return self.tags.all()

    def get_categories(self):
        return self.categories.all()

    def __str__(self):
        return '%s'%self.heading

    # custom save model
    def save(self, *args, **kwargs):
        self.link = '-'.join(re.sub('[^A-Za-z0-9]+', '', e) for e in self.heading.split(' '))
        super(Article, self).save()

    def get_absolute_url(self):
        try:
            url = "/article/"+str(self.link).lower()
        except:
            url = '/article/'
        return url


class Feature_Request(models.Model):
    objects = None
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    subject = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return '{0}'.format(self.name)

class Subscriber(models.Model):
    objects = None
    subscrib_email = models.EmailField(max_length=250)
    news_email = models.EmailField(max_length=250)