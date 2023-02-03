from django.shortcuts import render, get_object_or_404
from .models import *

# Create your views here.
def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def books_by_genre(request, bookgenre):
    by_genre = Book.objects.filter(genre=bookgenre)
    return render(request, 'books_by_genre.html', {'books_by_genre':by_genre, 'genre':bookgenre})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    borrowed_by = Borrowing.objects.filter(book=bookid)
    return render(request, 'single_book.html', {'book':single_book, 'borrowed_by':borrowed_by})

def view_customer(request, custid):
    customer = get_object_or_404(Customer, id=custid)
    cust = Customer.objects.get(id=custid)
    borrowing = Borrowing.objects.filter(customer=cust, is_returned=False)
    returned = Borrowing.objects.filter(customer=cust, is_returned=True)
    return render(request, 'customer.html', {'customer':customer, 'borrowing':borrowing, 'returned':returned})