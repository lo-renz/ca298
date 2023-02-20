from django.shortcuts import render, redirect
from .models import *
from .forms import *

# Create your views here.
def view_homepage(request):
    return render(request, 'homepage.html')

def create_pizza(request):
    if request.method == "POST":
        form = PizzaForm(request.POST)
        if form.is_valid():
            pizza = form.save()
            return redirect('createpizza/details', {'pizza':pizza})
        else:
            return render(request, 'create_pizza.html', {'form':form})
    else:
        form = PizzaForm()
        return render(request, 'create_pizza.html', {'form':form})

def delivery_details(request):
    if request.method == "POST":
        form = DetailsForm(request.POST)
        if form.is_valid():
            details = form.save()
            return render(request, 'confirmation.html', {'details':details})
        else:
            return render(request, 'details.html', {'form':form})
    else:
        form = DetailsForm()
        return render(request, 'details.html', {'form':form})
