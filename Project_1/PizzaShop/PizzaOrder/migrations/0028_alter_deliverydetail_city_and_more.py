# Generated by Django 4.1.6 on 2023-02-22 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaOrder', '0027_alter_deliverydetail_cvv'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deliverydetail',
            name='city',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='deliverydetail',
            name='county',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='deliverydetail',
            name='cvv',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='deliverydetail',
            name='eircode',
            field=models.TextField(default=''),
        ),
    ]
