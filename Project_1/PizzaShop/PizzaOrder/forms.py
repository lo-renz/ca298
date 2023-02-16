from django import forms
from .models import *

class PizzaOrderForm(forms.ModelForm):
    class Meta:
        model = PizzaOrder
        fields = ['size', 'crust', 'sauce', 'cheese', 'Pepperoni', 'Chicken', 'Ham', 'Pineapple', 'Peppers', 'Mushrooms', 'Onions']

class DetailsForm(forms.ModelForm):
    class Meta:
        model = DeliveryDetail
        fields = ['first_name', 'last_name', 'address1', 'address2', 'county', 'eircode', 'card', 'expiry']