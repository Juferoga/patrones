from rest_framework import serializers
from .models import Unity

class UnitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Unity
        fields = ('t_name','t_location')
        read_only_fields = ("pk_id","fk_type")