from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.Tables)
admin.site.register(models.Category)
admin.site.register(models.Food)
admin.site.register(models.FoodDetails)
admin.site.register(models.Order)
