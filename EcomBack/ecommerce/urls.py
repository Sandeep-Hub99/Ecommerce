"""ecommerce URL Configuration"""

from django.urls import path
from . import views
urlpatterns = [
    path('tables/', views.TableList.as_view()),
    path('tables/<int:pk>/', views.TableDetails.as_view()),
    path('category/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetail.as_view()),
    path('food/', views.FoodList.as_view()),
    path('food/<int:pk>/', views.FoodDetail.as_view()),
    path('foods/', views.FoodsDetailsList.as_view()),
    path('foods/<int:pk>/', views.FoodsDetails.as_view()),
    path('order/', views.OrderList.as_view()),
    path('order/<int:pk>/', views.OrderDetail.as_view()),
    
]
