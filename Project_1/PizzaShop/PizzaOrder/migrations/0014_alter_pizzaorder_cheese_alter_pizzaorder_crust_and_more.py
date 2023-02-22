# Generated by Django 4.1.5 on 2023-02-20 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0013_alter_pizzacheese_cheese_alter_pizzacrust_crust_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizzaorder',
            name='cheese',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='PizzaOrder.pizzacheese'),
        ),
        migrations.AlterField(
            model_name='pizzaorder',
            name='crust',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='PizzaOrder.pizzacrust'),
        ),
        migrations.AlterField(
            model_name='pizzaorder',
            name='sauce',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='PizzaOrder.pizzasauce'),
        ),
        migrations.AlterField(
            model_name='pizzaorder',
            name='size',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='PizzaOrder.pizzasize'),
        ),
    ]