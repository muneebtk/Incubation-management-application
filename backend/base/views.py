from urllib import response
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from .models import BookingSlot, Incubation

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import IncubationSerializer, PendingIncubationSerializer, SlotBookingSerializer, UserSerializerWithToken,UserSerializer
PendingIncubationSerializer,SlotBookingSerializer
from . import serializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  def validate(self,attrs):
    data=super().validate(attrs)
    serializer = UserSerializerWithToken(self.user).data
    for k,v in serializer.items():
        data[k]=v
    return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/token/refresh'
    ]
    return Response(routes)



@api_view(['POST'])
def RegisterUser(request):
    data=request.data
    user=User.objects.create(
        first_name=data['name'],
        username=data['email'],
        email=data['email'],
        password=make_password(data['password'])
    )
    print(user)
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getUserProfile(request):
#     user = request.user
#     serializer = UserSerializer(user,many=False)
#     return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def SubmitForm(request):
    data=request.data
    form = Incubation.objects.create(
    name=data['name'],
    address=data['address'],
    city=data['city'],
    state=data['state'],
    email=data['email'],
    phone=data['phone'],
    company_name=data['company_name'],
    company_logo=data['company_logo'],
    team_and_background=data['team_and_background'],
    company_and_products=data['company_and_products'],
    problem=data['problem'],
    about_solution=data['about_solution'],
    proposition=data['proposition'],
    competetors_and_advantages=data['competetors_and_advantages'],
    revenue_model=data['revenue_model'],
    market_products_and_service=data['market_products_and_service'],
    marketing_plan=data['marketing_plan'],
    business_proposal=data['business_proposal'],
    radio=data['radio'],
    )
    serializer=IncubationSerializer(form,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def PendingIncubation(request):

    pending=Incubation.objects.filter(status='Pending')
    serializer=PendingIncubationSerializer(pending,many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def AppDetailView(request,id):
    appdetail=Incubation.objects.get(id=id)
    serializer=IncubationSerializer(appdetail,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def ApproveIncubation(request,id):
    form = Incubation.objects.get(id=id)
    if form.status == 'Pending':
        form.status = 'Approve'
        form.save()
    else:
        form=form
    serializer=IncubationSerializer(form,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def RejectIncubation(request,id):
    form = Incubation.objects.get(id=id)
    if form.status=='Pending':
        form.status='Reject'
        form.save()
    else:
        form=form
    serializer=IncubationSerializer(form,many=False)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def ApprovedList(request):
    approved=Incubation.objects.filter(status='Approve')
    serializer=PendingIncubationSerializer(approved,many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def RejectedList(request):
    rejected=Incubation.objects.filter(status='Reject')
    serializer=PendingIncubationSerializer(rejected,many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def UsersList(request):
    users=User.objects.exclude(is_superuser=True)
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def BlockUser(request,id):
    user=User.objects.get(id=id)
    if user.is_active==True:
        user.is_active=False
        user.save()
    else:
        user=user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def UnBlockUser(request,id):
    user=User.objects.get(id=id)
    if user.is_active==False:
        user.is_active=True
        user.save()
    else:
        user=user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def SlotBooking(request):
    slots=BookingSlot.objects.all()
    serializer=SlotBookingSerializer(slots,many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def BookSlot(request):
   app=Incubation.objects.filter(status='Approve')
   serializer=IncubationSerializer(app,many=True)
   return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def SaveSlot(request,id,company_name):
    slot=BookingSlot.objects.get(id=id)
    company=Incubation.objects.get(company_name=company_name)
    slot.company=company
    slot.is_active=False
    company.status='Booked'
    company.save()
    slot.save()
    serializer=SlotBookingSerializer(slot,many=False)
    return Response(serializer.data)



