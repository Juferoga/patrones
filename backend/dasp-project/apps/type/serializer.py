from rest_framework import serializers
from .models import Type

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('t_tipo')
        read_only_fields = ("pk_id")