# Generated by Django 5.0.3 on 2024-03-30 18:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("utilities", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="categorygroup",
            name="categories",
            field=models.ManyToManyField(blank=True, to="utilities.category"),
        ),
    ]
