from rest_framework import serializers
from . import models

class TablesSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Tables
        fields=['Table_id','CustomerName','Phone','Email']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Food
        fields=['Food_id','FoodName','FoodPrice']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Food
        fields=['Category_id','Title','Foods','Price']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['Order_id','OrderNum','Table','Payment','Total']

class FoodDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['OrderDetails_id','OrderID','FoodItem','ItemPrice','Quantity']