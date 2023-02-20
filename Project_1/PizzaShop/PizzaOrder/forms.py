from django import forms
from .models import *

class PizzaForm(forms.ModelForm):
    class Meta:
        model = PizzaOrder
        fields = ['size', 'crust', 'sauce', 'cheese', 'Pepperoni', 'Chicken', 'Ham', 'Pineapple', 'Peppers', 'Mushrooms', 'Onions']

class DetailsForm(forms.ModelForm):
    class Meta:
        model = DeliveryDetail
        fields = ['first_name', 'last_name', 'address1', 'county', 'eircode', 'card', 'cvv', 'expiry', 'pizza_order']

    #Validation, use "clean" for validation instead of validating on models.py 
