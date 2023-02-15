from django.shortcuts import render
from .models import *

# Create your views here.
def view_homepage(request):
    return render(request, 'homepage.html')