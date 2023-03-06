from django.shortcuts import render, get_object_or_404
from .models import *
from .forms import *

# Create your views here.
def index(request):
    return render(request, 'index.html')

def view_all_items(request):
    all_items = Item.objects.all()
    return render(request, 'all_items.html', {'items': all_items})

def view_single_item(request, itemid):
    single_item = get_object_or_404(Item, id=itemid)
    return render(request, 'single_item.html', {'item': single_item})

def view_by_size(request, itemsize):
    by_size = Item.objects.filter(size=itemsize)
    return render(request, 'by_size.html', {'items': by_size})

def create_item(request):
    if request.method == "POST":
        form = ItemForm(request.POST)
        if form.is_valid():
            item = form.save()
            return render(request, 'item_created.html', {'item': item})
        else:
            return render(request, 'create_item.html', {'form':form})
    else:
        form = ItemForm()
        return render(request, 'create_item.html', {'form':form})
