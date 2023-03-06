from django.db import models

# Create your models here.
class Color(models.Model):
    id = models.AutoField(primary_key=True)
    color = models.TextField(default="")

    def __str__(self):
        return self.color

class Type(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField(default="")

    def __str__(self):
        return self.type

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=200)

    SIZES = [
        ('XS', 'XS'),
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L'),
        ('XL', 'XL'),
    ]
    size = models.CharField(max_length=2, choices=SIZES, default="")

    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        space = ', '
        return self.name +space+ self.description +space+ self.size +space+ str(self.type) +space+ str(self.color) +space+ str(self.price) +space+ str(self.quantity)