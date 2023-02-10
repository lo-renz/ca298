from django.db import models
from datetime import date, timedelta

# Create your models here.
class Book(models.Model):
    adventure = 'adventure'
    scifi = 'scifi'
    comedy = 'comedy'
    biography = 'biography'
    genres = [
        (adventure, 'adventure'),
        (scifi, 'scifi'),
        (comedy, 'comedy'),
        (biography, 'biography'),
    ]

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    genre = models.CharField(max_length=9, choices=genres, default=adventure)
    release_year = models.IntegerField()
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.title + " (bookid: " + str(self.id) + ")"

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()

    def __str__(self):
        return self.name

class Borrowing(models.Model):
    id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    return_date = date.today() + timedelta(7)
    due_date = models.DateField(default=return_date)
    is_returned = models.BooleanField(default=False)


    def __str__(self):
        if self.is_returned == False:
            return self.customer.name + ", " + self.book.title + ", Borrowing"
        else:
            return self.customer.name + ", " + self.book.title + ", Returned"