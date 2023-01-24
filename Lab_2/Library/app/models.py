from django.db import models

# Create your models here.
class Book(models.Model):
   id = models.AutoField(primary_key=True)
   year = models.IntegerField()
   author = models.CharField(max_length=50) # charfields have to have a max length
   price = models.DecimalField(max_digits=5, decimal_places=2) # number from 0.0-999.99
   title = models.CharField(max_length=50)
   synopsis = models.CharField(max_length=100)

   adventure = 'adventure'
   crime = 'crime'
   fantasy = 'fantasy'
   comedy = 'comedy'
   categories = [
      (adventure, 'adventure'), 
      (crime, 'crime'),
      (fantasy, 'fantasy'),
      (comedy, 'comedy'),
   ]
   category = models.CharField(max_length=50, choices=categories, default=adventure)