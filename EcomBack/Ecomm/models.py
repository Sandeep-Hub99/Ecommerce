from django.db import models
from Accounts.models import Seller,Customer

# class Vendor(models.Model):
#     user=models.ForeignKey(Seller,on_delete=models.CASCADE)
#     address=models.TextField(null=True)
    
#Product Catagory
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)

    def __str__(self):
        return self.title
    
#Product 
class Product(models.Model):
    category=models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name='category_products')
    vendor=models.ForeignKey(Seller,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    price=models.FloatField()

    def __str__(self):
        return self.title
    
#Order
class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time=models.DateTimeField(auto_now_add=True)

#OrderItem
class OrderItem(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    product=models.ForeignKey(Product,on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title
    
# Customer Models.
class CustomerAddress(models.Model):
    customer=models.OneToOneField(Customer,on_delete=models.CASCADE,related_name='customer_addresses')
    address=models.TextField()
    phone=models.IntegerField(null=True , blank=True)

    def __str__(self):
        return self.address
    
#Ratings
class ProductRatings(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customer')
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'