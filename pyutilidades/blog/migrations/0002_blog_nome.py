# Generated by Django 5.0.6 on 2024-07-26 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='nome',
            field=models.CharField(default='(Sem Titulo)', max_length=200),
        ),
    ]
