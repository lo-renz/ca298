# Generated by Django 4.1.5 on 2023-01-23 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_book_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('Adventure', 'Adventure'), ('Crime', 'Crime'), ('Fantasy', 'Fantasy'), ('Comedy', 'Comedy')], default='Adventure', max_length=20),
        ),
    ]
