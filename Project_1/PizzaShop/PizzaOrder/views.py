from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect
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
            return HttpResponseRedirect('createpizza/' + str(pizza.id) + '/details', {'pizza':pizza})
        else:
            return render(request, 'create_pizza.html', {'form':form})
    else:
        form = PizzaForm()
        return render(request, 'create_pizza.html', {'form':form})

def delivery_details(request, id):
    if request.method == "POST":
        form = DetailsForm(request.POST)
        if form.is_valid():
            details = form.save()
            customer = get_object_or_404(DeliveryDetail, id=id)
            pizza = get_object_or_404(PizzaOrder, id=id)
            return render(request, 'confirmation.html', {'pizza':pizza, 'customer':customer, 'details':details})
        else:
            return render(request, 'details.html', {'form':form})
    else:
        form = DetailsForm()
        return render(request, 'details.html', {'form':form})