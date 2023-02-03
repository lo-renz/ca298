# Generated by Django 4.1.5 on 2023-02-01 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_book_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='stock',
            new_name='quantity',
        ),
        migrations.RenameField(
            model_name='book',
            old_name='year',
            new_name='release_year',
        ),
        migrations.CreateModel(
            name='Borrowing',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('books_borrowed', models.CharField(max_length=50)),
                ('prev_borrowed', models.BooleanField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.customers')),
            ],
        ),
    ]
