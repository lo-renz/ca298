# Generated by Django 4.1.5 on 2023-02-03 09:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_alter_borrowing_due_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='borrowing',
            name='borrowed',
        ),
        migrations.AddField(
            model_name='borrowing',
            name='is_returned',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='borrowing',
            name='due_date',
            field=models.DateField(default=datetime.date(2023, 2, 10)),
        ),
    ]