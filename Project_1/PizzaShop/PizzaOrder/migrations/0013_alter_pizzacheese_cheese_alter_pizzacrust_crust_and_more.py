# Generated by Django 4.1.5 on 2023-02-20 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0012_pizzasize_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizzacheese',
            name='cheese',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='pizzacrust',
            name='crust',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='pizzasauce',
            name='sauce',
            field=models.TextField(default=''),
        ),
    ]
