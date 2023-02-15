from django.db import models
from datetime import *

# Create your models here.
class PizzaOrder(models.Model):
    id = models.AutoField(primary_key=True)

    # pizza size
    sizes = [
        ("Large", "Large"),
        ("Medium", "Medium"),
        ("Small", "Small"),
    ]
    size = models.CharField(max_length=6, choices=sizes, default="Small")

    # pizza crust
    crust_types = [
        ("Normal", "Normal"),
        ("Thin", "Thin"),
        ("Thick", "Thick"),
    ]
    crust = models.CharField(max_length=6, choices=crust_types, default="Normal")

    # pizza sauce
    sauces = [
        ("Tomato", "Tomato"),
        ("BBQ", "BBQ"),
    ]
    sauce = models.CharField(max_length=6, choices=sauces, default="Tomato")

    # pizza cheese
    cheeses = [
        ("Mozzarella", "Mozzarella"),
        ("Vegan", "Vegan"),
    ]
    cheese = models.CharField(max_length=10, choices=cheeses, default="Mozzarella")

    # pizza toppings
    Pepperoni = models.BooleanField(default=False)
    Chicken = models.BooleanField(default=False)
    Ham = models.BooleanField(default=False)
    Pineapple = models.BooleanField(default=False)
    Peppers = models.BooleanField(default=False)
    Mushrooms = models.BooleanField(default=False)
    Onions = models.BooleanField(default=False)

    def __str__(self):
        toppings = []
        if self.Pepperoni == True:
            toppings.append("Pepperoni")
        if self.Chicken == True:
            toppings.append("Chicken")
        if self.Ham == True:
            toppings.append("Ham")
        if self.Pineapple == True:
            toppings.append("Pineapple")
        if self.Peppers == True:
            toppings.append("Peppers")
        if self.Mushrooms == True:
            toppings.append("Mushrooms")
        if self.Onions == True:
            toppings.append("Onions")
        return self.size + ", " + self.crust + ", " + self.sauce + ", " +  self.cheese + ", " + "Toppings: " + str(toppings)

class DeliveryDetail(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    address1 = models.CharField(max_length=50, default='')
    address2 = models.CharField(max_length=50, default='')
    county = models.CharField(max_length=50, default='')
    eircode = models.CharField(max_length=7, default='')
    card = models.BigIntegerField()
    expiry = models.DateField(default=date.today)
    pizza_order = models.ForeignKey(PizzaOrder, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.first_name + " " + self.last_name + ", " + self.address1 + ", " + self.address2 + ", " + str(self.card) + ", " + str(self.expiry)