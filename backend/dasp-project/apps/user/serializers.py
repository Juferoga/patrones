from django.contrib.auth import get_user_model
from rest_framework import serializers
from apps.user.data import ROLES

class UserSerializer(serializers.ModelSerializer):
  def create(self, validated_data):
    
    user = get_user_model()(
      email=validated_data['email'],
      username=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
      role=validated_data['t_role'],
      phone=validated_data['n_phone'],
      password=validated_data['password'],
      is_active=True,

    )
    
    user.save()
    
    return user

  class Meta:
    model = get_user_model()
    fields = ['pk', 'email', 'first_name', 'last_name', 't_role', 'get_role_display', 'is_active']
    read_only_fields = ['pk', ]


class PasswordSerializer(serializers.Serializer):
  old_password = serializers.CharField(min_length=8, max_length=25)
  new_password = serializers.CharField(min_length=8, max_length=25)
  renew_password = serializers.CharField(min_length=8, max_length=25)

  def validate(self, data):
    if data.get('new_password') != data.get('renew_password'):
      raise serializers.ValidationError("La contraseña nueva y la verificación no coinciden")
    return data
