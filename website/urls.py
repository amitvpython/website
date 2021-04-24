"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from website import settings
from django.conf.urls.static import static

# from website.views import error404

# from django.conf.urls import handler404, handler500, handler400

#https://stackoverflow.com/questions/63286591/django-3-1-admin-page-appearance-issue
admin.autodiscover()
admin.site.enable_nav_sidebar = False

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^froala_editor/', include('froala_editor.urls')),
    url(r'', include('website.website_urls')),
    url(r'^imagefit/', include('imagefit.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# handler400 = error404
# handler404 = error404
# handler500 = error404
