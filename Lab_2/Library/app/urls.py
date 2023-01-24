from django.urls import path
from .views import *

urlpatterns = [
    path('books', view_all_books, name='all_books'),
    path('books/<int:bookid>', view_single_book, name='single_book'),
    path('books/year/<int:bookyear>', books_by_year, name='books_by_year'),
    path('books/category/<str:bookcategory>', view_by_category, name='books_by_category'),
    path('books/category/<str:bookcategory>/year/<int:bookyear>', view_by_category_and_year, name='books_by_category')
]