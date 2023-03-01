from django.db import models

# Create your models here.
class PizzaSize(models.Model):
    id = models.AutoField(primary_key=True)
    size = models.TextField(default='')

    def __str__(self):
        return self.size

class PizzaCrust(models.Model):
    id = models.AutoField(primary_key=True)
    crust = models.TextField(default='')

    def __str__(self):
        return self.crust

class PizzaSauce(models.Model):
    id = models.AutoField(primary_key=True)
    sauce = models.TextField(default='')

    def __str__(self):
        return self.sauce

class PizzaCheese(models.Model):
    id = models.AutoField(primary_key=True)
    cheese = models.TextField(default='')

    def __str__(self):
        return self.cheese

class PizzaOrder(models.Model):
    id = models.AutoField(primary_key=True)
    size = models.ForeignKey(PizzaSize, on_delete=models.SET_NULL, null=True)
    crust = models.ForeignKey(PizzaCrust, on_delete=models.SET_NULL, null=True)
    sauce = models.ForeignKey(PizzaSauce, on_delete=models.SET_NULL, null=True)
    cheese = models.ForeignKey(PizzaCheese, on_delete=models.SET_NULL, null=True)

    # pizza toppings
    Pepperoni = models.BooleanField(default=False)
    Chicken = models.BooleanField(default=False)
    Ham = models.BooleanField(default=False)
    Pineapple = models.BooleanField(default=False)
    Peppers = models.BooleanField(default=False)
    Mushrooms = models.BooleanField(default=False)
    Onions = models.BooleanField(default=False)

    toppings = []
    if Pepperoni == True:
        toppings.append("Pepperoni")
    if Chicken == True:
        toppings.append("Chicken")
    if Ham == True:
       toppings.append("Ham")
    if Pineapple == True:
        toppings.append("Pineapple")
    if Peppers == True:
        toppings.append("Peppers")
    if Mushrooms == True:
        toppings.append("Mushrooms")
    if Onions == True:
        toppings.append("Onions")
 
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
        return str(", ".join(toppings))

class DeliveryDetail(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    address1 = models.CharField(max_length=50, default='')
    address2 = models.CharField(max_length=50, default='')
    city = models.CharField(max_length=30, default='')
    county = models.CharField(max_length=30, default='')
    eircode = models.CharField(max_length=7, default='')
    card = models.IntegerField()
    cvv = models.CharField(max_length=3)
    expiry = models.CharField(max_length=5)

    def __str__(self):
        return "{}, {}, {}, {}, {}, {}, {}, {}, {}".format(self.first_name, self.last_name, self.address1, self.county, self.eircode, self.card, self.expiry, self.cvv, self.id)