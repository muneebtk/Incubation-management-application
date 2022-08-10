from django . urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',views.RegisterUser,name='register'),
    path('submit_form/',views.SubmitForm,name='submit_form'),
    path('pending_incubation/',views.PendingIncubation,name='pending_incubation'),
    path('app_detail_view/<int:id>/',views.AppDetailView,name='app_detail_view'),
    path('approve_incubation/<int:id>/',views.ApproveIncubation,name='approve_incubation'),
    path('reject_incubation/<int:id>/',views.RejectIncubation,name='reject_incubation'),
    path('approved_list/',views.ApprovedList,name='approved_list'),
    path('rejected_list/',views.RejectedList,name='rejected_list'),
    path('users_list/',views.UsersList,name='users_list'),
    path('block_user/<int:id>/',views.BlockUser,name='block_user'),
    path('unblock_user/<int:id>/',views.UnBlockUser,name='unblock_user'),
    path('slot_booking/',views.SlotBooking,name='slot_booking'),
    path('approved_company/',views.BookSlot,name='approved'),
    path('save_slot/<int:id>/<str:company_name>/',views.SaveSlot,name='save_slot'),
]