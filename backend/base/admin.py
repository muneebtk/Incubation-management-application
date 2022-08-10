from django.contrib import admin
from .models import Incubation,BookingSlot

# Register your models here.

class IncubationAdmin(admin.ModelAdmin):
    pass
class BookSlotAdmin(admin.ModelAdmin):
    pass
admin.site.register(BookingSlot,BookSlotAdmin)
admin.site.register(Incubation,IncubationAdmin)