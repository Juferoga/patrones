from rest_framework import serializers
from .models import Show

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ('d_time')
        read_only_fields = ('pk_id',"fk_movie")