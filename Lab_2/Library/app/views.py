from django.shortcuts import render, get_object_or_404
from .models import *

# Create your views here.
def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    return render(request, 'single_book.html', {'book':single_book})

def books_by_year(request, bookyear):
    all_books = Book.objects.all()
    books_by_year = []
    for book in all_books:
        if bookyear == book.year:
            books_by_year.append(book)
    return render(request, 'books_by_year.html', {'books_by_year':books_by_year})

def view_by_category(request, bookcategory):
    by_category = Book.objects.filter(category=bookcategory)
    return render(request, 'books_by_category.html', {'books_by_category':by_category})

def view_by_category_and_year(request, bookcategory, bookyear):
    by_category_and_year = Book.objects.filter(category=bookcategory, year=bookyear)
    return render(request, 'books_by_category.html', {'books_by_category':by_category_and_year})
