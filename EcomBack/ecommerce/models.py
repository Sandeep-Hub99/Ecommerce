from django.db import models

#Tables
class Tables(models.Model):
    Table_id = models.AutoField(primary_key=True)
    CustomerName=models.CharField(max_length=200)
    Phone=models.IntegerField()
    Email=models.EmailField()

    def __str__(self):
        return self.CustomerName

#FoodItems
class Food(models.Model):
    Food_id = models.AutoField(primary_key=True)
    FoodName=models.CharField(max_length=200)
    FoodPrice= models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.FoodName
    
#FoodCategory
class Category(models.Model):
    Category_id = models.AutoField(primary_key=True)
    Title=models.CharField(max_length=200)
    Foods=models.ManyToManyField(Food)

    def __str__(self):
        return self.Title


#Order
PAYMENTS_CHOICES = (
    ("Not_Paid", "Not_Paid"),
    ("UPI", "UPI"),
    ("CASH", "CASH"),
)
class Order(models.Model):
    Order_id = models.AutoField(primary_key=True)
    OrderNum=models.IntegerField()
    Table = models.ForeignKey(Tables, on_delete=models.CASCADE, blank=True)
    Payment = models.CharField(max_length = 20,choices = PAYMENTS_CHOICES,default = 'Not_Paid')
    Total= models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.OrderNum
    

#Order
class FoodDetails(models.Model):
    OrderDetails_id = models.AutoField(primary_key=True)
    OrderID = models.OneToOneField(Order,on_delete=models.CASCADE)
    FoodItem=models.ManyToManyField(Food)
    ItemPrice= models.DecimalField(max_digits=10, decimal_places=2)
    Quantity=models.IntegerField()

    def __str__(self):
        return self.OrderID
    


    

    