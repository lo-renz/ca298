from django.urls import path
from .views import *

urlpatterns = [
    path('', view_homepage),
    path('createpizza', create_pizza, name='create_pizza'),
    path('createpizza/details/<int:id>', delivery_details, name='delivery_details'),
    path('createpizza/details/<int:id>/confirmation', delivery_details, name='confirmation'),
]