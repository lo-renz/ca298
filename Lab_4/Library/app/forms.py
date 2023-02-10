from django import forms
from .models import *
from datetime import datetime

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'author', 'genre', 'release_year', 'quantity']

    def clean(self):
        data = self.cleaned_data
        title = data['title']
        release_year = data['release_year']

        current_datetime = datetime.now()
        current_year = current_datetime.year

        book_exists = Book.objects.filter(title=title).exists()
        if book_exists:
            raise forms.ValidationError("A book of that title already exists!")
        elif release_year > current_year:
            raise forms.ValidationError("The year you entered is in the future!")