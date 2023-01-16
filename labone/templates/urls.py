from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('contacts.html', views.contacts, name="index"),
]