from django.db import models
from django.contrib.auth.models import User


CHOICES=(
    ('Pending','Pending'),
    ('Approve','Approve'),
    ('Reject','Reject'),
    ('Booked','Booked'),
)
class Incubation(models.Model):
    name=models.CharField(max_length=50)
    address=models.CharField(max_length=100)
    city=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
    email=models.EmailField(max_length=50)
    phone=models.CharField(max_length=10)
    company_name=models.CharField(max_length=100)
    company_logo=models.ImageField(upload_to='company_logo',null=True,blank=True)
    team_and_background=models.TextField(max_length=200)
    company_and_products=models.TextField(max_length=200)
    problem=models.TextField(max_length=200)
    about_solution=models.TextField(max_length=200)
    proposition=models.TextField(max_length=200)
    competetors_and_advantages=models.TextField(max_length=200)
    revenue_model=models.TextField(max_length=200)
    market_products_and_service=models.TextField(max_length=200)
    marketing_plan=models.TextField(max_length=200)
    radio=models.CharField(max_length=50)
    business_proposal=models.TextField(max_length=200)
    status=models.CharField(choices=CHOICES,default='Pending',max_length=20)

class BookingSlot(models.Model):
    CHOICES1=(
        ('A','A'),
        ('B','B'),
        ('C','C'),
        ('D','D'),
        ('E','E'),
        ('F','F'),
        ('G','G'),
    )
    company=models.ForeignKey(Incubation,on_delete=models.CASCADE,null=True,blank=True)
    slot_number=models.CharField(max_length=50)
    section=models.CharField(max_length=50,choices=CHOICES1)
    is_active=models.BooleanField(default=False)
    date=models.CharField(max_length=50)
    time=models.CharField(max_length=50)