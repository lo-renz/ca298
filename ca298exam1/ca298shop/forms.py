from django import forms
from django.forms import ModelChoiceField, Select, CheckboxInput
from django.db import transaction
from .models import *

class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ['name', 'description', 'size', 'type', 'color', 'price', 'quantity']

    widgets = {
            'name': CheckboxInput(attrs={
                'class': 'form-control',
                'style': 'max_width: 300px',
                'placeholder': 'Name',
            }),

            'description': CheckboxInput(attrs={
                'class': 'form-control',
                'style': 'max_width: 300px',
                'placeholder': 'Description',
            }),

            'size': Select(attrs={
                'class': 'form-control',
                'style': 'max_width: 300px',
                'placeholder': 'Size',
            }),

            'type': Select(attrs={
                'class': 'form-control',
                'style': 'max_width: 300px',
                'placeholder': 'Type',
            }),

            'color': Select(attrs={
                'class': 'form-check-input',
                'style': 'max_width: 300px',
                'placeholder': 'Color',
            }),

            'price': CheckboxInput(attrs={
                'class': 'form-check-input',
                'style': 'max_width: 300px',
                'placeholder': 'Price',
            }),

            'quantity': CheckboxInput(attrs={
                'class': 'form-check-input',
                'style': 'max_width: 300px',
                'placeholder': 'Quantity',
            }),
        }


    def clean(self):
        data = self.cleaned_data
        name = data['name']
        description = data['description']
        size = data['size']
        type = data['type']
        color = data['color']
        price = data['price']
        quantity = data['quantity']

        if name == "":
            raise forms.ValidationError("Name was left blank!")

        if description == "":
            raise forms.ValidationError("Description was left blank!")

        if size == None:
            raise forms.ValidationError("Size was left blank!")

        if type == None:
            raise forms.ValidationError("Type was left blank!")

        if color == None:
            raise forms.ValidationError("Color was left blank!")

        if price == None:
            raise forms.ValidationError("Price was left blank!")

        if quantity == None:
            raise forms.ValidationError("Quantity was left blank!")

        return data