# Generated by Django 4.1.5 on 2023-02-20 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0014_alter_pizzaorder_cheese_alter_pizzaorder_crust_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizzaorder',
            name='size',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='PizzaOrder.pizzasize'),
        ),
    ]
