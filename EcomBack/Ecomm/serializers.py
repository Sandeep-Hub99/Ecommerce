from rest_framework import serializers
from . import models

# from Accounts.models import Seller
# class VendorSerializer(serializers.Serializer):
#     class Meta:
#         model=Seller
#         fields=['user','phone']
class ProductListSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','detail','price','product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings=serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title','detail','price','product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['id','customer','order_time']

    def __init__(self, *args, **kwargs):
        super(OrderSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.OrderItem
        fields=['id','order','product']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CustomerAddress
        fields=['id','customer','address','phone']

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductRatings
        fields=['id','customer','product','rating','reviews','add_time']

    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductCategory
        fields=['id','title','detail']

    def __init__(self, *args, **kwargs):
        super(CategorySerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductCategory
        fields=['id','title','detail']

    def __init__(self, *args, **kwargs):
        super(CategorySerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1