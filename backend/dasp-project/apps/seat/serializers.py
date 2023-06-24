from rest_framework import serializers
from .models import Seat

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = ('b_state','fk_theater')
        read_only_fields = ('pk_id',)