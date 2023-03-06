from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='homepage'), 
    path('homepage', views.index, name='homepage'),
    path('items', views.view_all_items, name='all_items'),
    path('items/single_item/<int:itemid>', views.view_single_item, name='single_item'),
    path('items/by_size/<str:itemsize>', views.view_by_size, name='by_size'),
    path('createitem', views.create_item, name='create_item'),
]