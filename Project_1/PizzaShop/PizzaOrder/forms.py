from django import forms
from .models import *
from datetime import datetime

class PizzaForm(forms.ModelForm):
    class Meta:
        model = PizzaOrder
        fields = ['size', 'crust', 'sauce', 'cheese', 'Pepperoni', 'Chicken', 'Ham', 'Pineapple', 'Peppers', 'Mushrooms', 'Onions']
        # TODO: use widget classes to style the form.

class DetailsForm(forms.ModelForm):
    class Meta:
        model = DeliveryDetail
        fields = ['first_name', 'last_name', 'address1', 'address2', 'city', 'county', 'eircode', 'card', 'expiry', 'cvv', 'pizza_order']
        # TODO: use widget classes to style the form.

    def clean(self):
        data = self.cleaned_data
        first_name = data['first_name']
        last_name = data['last_name']
        address1 = data['address1']
        address2 = data['address2']
        city = data['city']
        county = data['county']
        eircode = data['eircode']
        card = data['card']
        expiry = data['expiry']
        cvv = data['cvv']


        # this block of code checks whether the format of the expiry date is valid.
        try:
            # name validation
            if(first_name == ""):
                raise forms.ValidationError("First name was left blank!")
            elif (last_name == ""):
                raise forms.ValidationError("Last name was left blank!")

            # address validation
            if address1 == "":
                raise forms.ValidationError("Invalid address1!")
            elif address2 == "":
                raise forms.ValidationError("Invaild address2!")
            elif city == "":
                raise forms.ValidationError("Invalid City!")
            elif county == "":
                raise forms.ValidationError("Invalid County!")
            elif len(eircode) != 7:
                raise forms.ValidationError("Invalid Eircode!")
            
            # visa or mastercard number validation
            if (str(card)[0] != "4" and len(str(card)) != 13 or len(str(card)) != 16) or (str(card)[0] != "5" and len(str(card)) != 16):
                raise forms.ValidationError("Invalid card number!")

            # card expiry date vaildation
            expiry_month = expiry.split('/')[0]
            expiry_year = expiry.split('/')[1]
            current_year = int(str(datetime.now().year)[2:4])
            current_month = int(str(datetime.now().month))
            # checking whether the year and month are valid
            if int(expiry_month) < 1 or int(expiry_month) > 12:
                raise forms.ValidationError("Invalid month was entered")
            elif int(expiry_year) < current_year:
                raise forms.ValidationError("Invalid expiry year!")

            # checking whether the month in the current year is valid
            if (int(expiry_year) == current_year) and int(expiry_month) < current_month:
                raise forms.ValidationError("Invalid month was entered!")

            # checking whether the expiry date format is correct
            try:
                datetime.strptime(expiry, '%m/%y')
            except ValueError:
                raise forms.ValidationError("Invalid date format entered!")
            #if datetime.strptime(expiry, '%m/%y'):
            #    pass

            # card cvv validation
            if int(cvv):
                pass 
            elif str(cvv) == "000":
                pass
            else:
                raise forms.ValidationError("Invalid cvv entered")

        except ValueError:
            raise forms.ValidationError("Invalid cvv entered!")

        return data