# Generated by Django 4.1.6 on 2023-02-22 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0028_alter_deliverydetail_city_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deliverydetail',
            name='eircode',
            field=models.CharField(default='', max_length=7),
        ),
    ]