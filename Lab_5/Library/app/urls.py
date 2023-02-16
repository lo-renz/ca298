from django.urls import include, path
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('customers', CustomerViewSet)
router.register('book', BookViewSet)
router.register('borrow', BorrowViewSet)

urlpatterns = [
    path('books', view_all_books, name='all_books'),
    path('books/genre/<str:bookgenre>', books_by_genre, name='by_genre'),
    path('books/<int:bookid>', view_single_book, name='single_book'),
    path('customer/<int:custid>', view_customer, name='customer'),

    path('add', api_add, name='api_add'),
    path('subtract', api_subtract, name='api_subtract'),
    path('divide', api_divide, name='api_divide'),
    path('multiply', api_multiply, name='api_multiply'),
    path('exponential', api_exponential, name='api_exponential'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]