from django.urls import path
from apps.user import views

urlpatterns = [
  path('users/', views.UserListAPIView.as_view(), name='user-list'),
  path('users/<int:pk>', views.UserDetailAPIView.as_view(), name='user-detail'),
  path('clients/', views.ClientListAPIView.as_view(), name='client-list'),
  path('sellers/', views.SellerListAPIView.as_view(), name='seller-list'),
  path('token/obtain/', views.CObtainAuthTokenView.as_view(), name='obtain-token'),
  path('reset-password/<int:pk>', views.ResetPasswordView.as_view(), name='reset-password'),
]
