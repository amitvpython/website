from django.contrib import admin
from articles.models import *
from image_cropping import ImageCroppingMixin

# class MyModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
#     class Media:
#         # css = {
#         #     "all": ("css/my_style.css",)
#         # }
#         js = ("js/custom-admin.js",)

class MyModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    exclude = ("link",)
    search_fields = ['heading']
    list_display = ('heading', 'date', 'author', 'featured')
    class Media:
        # css = {
        #     "all": ("css/my_style.css",)
        # }
        js = ("js/custom-admin.js",)

# Register your models here.
admin.site.register(Article, MyModelAdmin)
admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(FeatureRequests)
admin.site.register(Subscribers)
admin.site.register(GainerLoser)
