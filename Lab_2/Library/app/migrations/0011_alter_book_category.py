# Generated by Django 4.1.5 on 2023-01-24 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_alter_book_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('adventure', 'adventure'), ('crime', 'crime'), ('fantasy', 'fantasy'), ('comedy', 'comedy')], default='adventure', max_length=50),
        ),
    ]
