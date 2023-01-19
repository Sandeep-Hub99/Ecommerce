from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.User)
admin.site.register(models.Seller)
admin.site.register(models.Customer)


# {
#     "user": {
#         "username": "TestSeller",
#         "email": "test2@seller.com",
#         "password2":"password1234"
#         "is_seller": true
#     },
#     "token": "268205af9c833f3dee3403cf068707454aa77c23",
#     "message": "Account Created Sucessfully"
# }


# {
#     "user": {
#         "username": "TestSeller",
#         "email": "test2@seller.com",
#         "password2":"password1234"
#         "is_seller": true
#     },
#     "token": "268205af9c833f3dee3403cf068707454aa77c23",
#     "message": "Account Created Sucessfully"
# }