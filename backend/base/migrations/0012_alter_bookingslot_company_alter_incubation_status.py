# Generated by Django 4.0.4 on 2022-08-03 05:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_alter_bookingslot_section'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookingslot',
            name='company',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.incubation'),
        ),
        migrations.AlterField(
            model_name='incubation',
            name='status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Approve', 'Approve'), ('Reject', 'Reject'), ('Booked', 'Booked')], default='Pending', max_length=20),
        ),
    ]