from django.shortcuts import render
from . import serializers
from rest_framework import generics
from. import models
# Create your views here.
class TableList(generics.ListCreateAPIView):
    queryset=models.Tables.objects.all()
    serializer_class=serializers.TablesSerializer

class TableDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Tables.objects.all()
    serializer_class=serializers.TablesSerializer

class FoodList(generics.ListCreateAPIView):
    queryset=models.Food.objects.all()
    serializer_class=serializers.FoodSerializer

class FoodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Food.objects.all()
    serializer_class=serializers.FoodSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset=models.Category.objects.all()
    serializer_class=serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Category.objects.all()
    serializer_class=serializers.CategorySerializer

class OrderList(generics.ListCreateAPIView):
    queryset=models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

class FoodsDetailsList(generics.ListCreateAPIView):
    queryset=models.FoodDetails.objects.all()
    serializer_class=serializers.FoodDetailsSerializer

class FoodsDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.FoodDetails.objects.all()
    serializer_class=serializers.FoodDetailsSerializer
