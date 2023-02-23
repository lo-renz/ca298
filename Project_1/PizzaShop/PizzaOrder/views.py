from django.shortcuts import render, get_object_or_404
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
            return HttpResponseRedirect('createpizza/details/' + str(pizza.id), {'pizza':pizza})
        else:
            return render(request, 'create_pizza.html', {'form':form})
    else:
        form = PizzaForm()
        return render(request, 'create_pizza.html', {'form':form})

# TODO: find out how to keep a pizza connected (with having to manually selecting a pizza) to the customer when the user presses "order" create_pizza.html.
def delivery_details(request, id):
    if request.method == "POST":
        form = DetailsForm(request.POST)
        if form.is_valid():
            details = form.save()
            pizza = get_object_or_404(PizzaOrder, id=id)
            return HttpResponseRedirect(str(details.id) + '/confirmation', {'details':details, 'pizza':pizza})
            #return render(request, 'confirmation.html', {'details':details, 'pizza':pizza, 'user_details':user_details})
        else:
            return render(request, 'details.html', {'form':form})
    else:
        form = DetailsForm()
        return render(request, 'details.html', {'form':form})
