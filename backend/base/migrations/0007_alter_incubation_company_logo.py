# Generated by Django 4.0.4 on 2022-07-30 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_incubation_radio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incubation',
            name='company_logo',
            field=models.ImageField(blank=True, null=True, upload_to='company_logo'),
        ),
    ]
