from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ("t_type","t_status")
        read_only_fields  = ("pk_id","fk_cliente","fk_show")