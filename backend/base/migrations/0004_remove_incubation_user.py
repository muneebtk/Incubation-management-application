# Generated by Django 4.0.4 on 2022-07-30 08:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_incubation_company_logo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='incubation',
            name='user',
        ),
    ]
