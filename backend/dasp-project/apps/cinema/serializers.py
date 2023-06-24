from rest_framework import serializers
from .models import Cinema

class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = ('t_description','t_name')
        read_only_fields = ('pk_id',)