from rest_framework import generics, status

from .serializers import UserSerializer, PasswordSerializer
from django.contrib.auth import get_user_model
from apps.user import data
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate
from shared.permissions import IsAdminOrOwner, IsAdmin, IsReviewer

## EJEMPLO
class UserListAPIView(generics.ListCreateAPIView):
  queryset = get_user_model().objects.all().exclude(role=data.ADMINISTRATOR)
  serializer_class = UserSerializer
  permission_classes = [ IsAdmin]


class SellerListAPIView(generics.ListAPIView):
  queryset = get_user_model().objects.filter(role=data.SELLER)
  serializer_class = UserSerializer
  permission_classes = [ IsAdmin | IsReviewer]

class ClientListAPIView(generics.ListAPIView):
  queryset = get_user_model().objects.filter(role=data.CLIENT)
  serializer_class = UserSerializer
  permission_classes = [ IsAdmin | IsReviewer]


class CObtainAuthTokenView(ObtainAuthToken):
  def post(self, request, *args, **kwargs):
    serializer = self.serializer_class(data=request.data, context={'request': request})
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, _ = Token.objects.get_or_create(user=user)

    return Response({
      'token': token.key,
      'role': user.get_role(),
      'id': user.pk
    })

class UserDetailAPIView(generics.RetrieveUpdateAPIView):
  queryset = get_user_model().objects.all()
  serializer_class = UserSerializer
  permission_classes=[IsAdminOrOwner]


class ResetPasswordView(generics.UpdateAPIView):
  permission_classes=[IsAdminOrOwner]
  serializer_class = PasswordSerializer
  
  def put(self, request, pk=None):
    user = get_user_model().objects.filter(pk=pk).first()
    serializer = self.get_serializer(data=request.data)

    instance = authenticate(username=user.username, password=request.data.get('old_password'))
    if not instance:
      return Response({'error': 'La contraseña es incorrecta'}, status=status.HTTP_400_BAD_REQUEST)

    if serializer.is_valid():
      user.set_password(serializer.validated_data['new_password'])
      user.save()
      return Response({'message': 'La contraseña se cambio con éxito'})
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
