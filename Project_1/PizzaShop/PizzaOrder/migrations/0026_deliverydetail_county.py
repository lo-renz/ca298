# Generated by Django 4.1.6 on 2023-02-21 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0025_rename_county_deliverydetail_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliverydetail',
            name='county',
            field=models.CharField(default='', max_length=20),
        ),
    ]