# Generated by Django 5.0.6 on 2024-07-29 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questao', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questao',
            name='questao',
            field=models.CharField(max_length=5000, unique=True),
        ),
    ]