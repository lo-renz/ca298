from django.db import models

# Create your models here.
class Book(models.Model):
    id = models.Autofield()
    year = models.DateField()
    author = models.CharField(max_length=20) # charfields have to have a max length
    price = models.DecimalField(max_digits=5, decimal_places=2) # number from 0.0-999.99
    title = models.CharField(max_length=20)
    synopsis = models.CharField(max_length=50)