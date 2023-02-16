from django.shortcuts import render
from .models import *
from .forms import *

# Create your views here.
def view_homepage(request):
    return render(request, 'homepage.html')

def create_pizza(request):
    if request.method == "POST":
        pizzaform = PizzaOrderForm(request.POST)
        if pizzaform.is_valid():
            pizza = pizzaform.save()
            # once successful, send the user to the DeliveryDetails page.
            return render(request, 'delivery_details.html', {'pizza':pizza})
        else:
            # this runs when the form contains errors.
            return render(request, 'create_pizza.html', {'form':pizzaform})
    else:
        pizzaform = PizzaOrderForm()
        return render(request, 'create_pizza.html', {'form':pizzaform})

def delivery_details(request):
    if request.method == "POST":
        detailsform = DetailsForm(request.POST)
        if detailsform.is_valid():
            details = detailsform.save()
            return render(request, 'order_placed.html', {'details':details})
        else:
            return render(request, 'delivery_details.html', {'form':detailsform})
    else:
        detailsform = DetailsForm()
        return render(request, 'delivery_details.html', {'form':detailsform})

def order_placed(request):
    return render(request, 'order_placed.html')