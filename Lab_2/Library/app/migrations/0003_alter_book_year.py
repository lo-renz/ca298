# Generated by Django 4.1.5 on 2023-01-23 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_book_author_alter_book_synopsis_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='year',
            field=models.IntegerField(),
        ),
    ]
