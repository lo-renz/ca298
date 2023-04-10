from rest_framework import serializers
from .models import *

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name']

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'genre', 'release_year', 'quantity']

class BorrowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Borrowing
        fields = ['id', 'customer', 'book', 'return_date', 'due_date', 'is_returned']