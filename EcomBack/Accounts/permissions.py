from rest_framework.permissions import BasePermission

class IsSellerUser(BasePermission):
    def has_permission(self,request, view):

        return bool(request.user and request.user.is_seller)
    
class IsCustomerUser(BasePermission):
    def has_permission(self,request, view):

        return bool(request.user and request.user.is_customer)