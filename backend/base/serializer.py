from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from .models import BookingSlot, Incubation

class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    is_admin=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=User
        fields=['id','_id','username','email','is_admin','name','is_active','is_superuser']
    def get__id(self,obj):
        return obj.id

    def get_is_admin(self,obj):
        return obj.is_staff

    def get_name(self,obj):
        name=obj.first_name
        if name=='':
            name=obj.email
        return name
class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=User
        fields=['id','_id','username','email','is_admin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)

class IncubationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Incubation
        fields='__all__'

class PendingIncubationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Incubation
        fields=['id','company_name','company_and_products','status']

class SlotBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=BookingSlot
        fields='__all__'
