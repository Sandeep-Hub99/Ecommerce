"""EcomBack URL Configuration"""

from django.contrib import admin
from ecommerce import urls 
from django.urls import path ,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/', include(urls)),
    path('api/', include('Ecomm.urls')),
    path('api/', include('Accounts.urls')),
]
