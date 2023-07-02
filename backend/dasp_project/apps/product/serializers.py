from rest_framework import serializers
from .models import Product, Ticket, Snack

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('t_name','t_description','n_price',)
        read_only_fields = ('pk_id',)

class SnackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snack
        fields = ('t_name','t_description','n_price','n_stock','t_type')
        read_only_fields = ('pk_id',)

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('t_name','t_description','n_price','d_creation')
        read_only_fields = ('pk_id',)