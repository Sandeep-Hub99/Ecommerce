"""Accounts URL Configuration"""
from django.urls import path ,include
from .views import CustomerSignupView , SellerSignupView ,CustomAuthToken,CustomerOnlyView,SellerOnlyView,LogoutView


urlpatterns = [
    path('signup/customer/', CustomerSignupView.as_view()),
    path('signup/seller/', SellerSignupView.as_view()),
    path('login/', CustomAuthToken.as_view(), name='auth-token'),
    path('logout/', LogoutView.as_view(), name='logout-view'),
    path('customer/dashboard/', CustomerOnlyView.as_view(),name='customer-dashboard'),
    path('seller/dashboard/', SellerOnlyView.as_view(),name='seller-dashboard')
]




# {
#     "username":"TestSeller",
#     "password":"password1234"
# }