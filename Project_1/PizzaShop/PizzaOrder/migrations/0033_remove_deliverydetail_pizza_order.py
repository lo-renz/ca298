# Generated by Django 4.1.6 on 2023-02-28 20:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0032_deliverydetail_pizza_order'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deliverydetail',
            name='pizza_order',
        ),
    ]