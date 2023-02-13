from django.shortcuts import render, get_object_or_404
from .models import *
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import *

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

def api_add(request):
    # use 1 as default.
    # we should enforce type restriction by casting the values passed to a float.
    # they are assumed as strings by default.
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    added = num1 + num2
    # we have to give the value 'added' a key we will call 'result'
    resp_dict = {'result':added}
    return JsonResponse(resp_dict)

def api_subtract(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    subtracted = num1 - num2
    resp_dict = {'result':subtracted}
    return JsonResponse(resp_dict)

def api_divide(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    divided = num1 / num2
    resp_dict = {'result':divided}
    return JsonResponse(resp_dict)

def api_multiply(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    multiplied = num1 * num2
    resp_dict = {'result':multiplied}
    return JsonResponse(resp_dict)

def api_exponential(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    result = num1 ** num2
    resp_dict = {'result':result}
    return JsonResponse(resp_dict)

class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class BorrowViewSet(viewsets.ModelViewSet):
    serializer_class = BorrowSerializer
    queryset = Borrowing.objects.all()