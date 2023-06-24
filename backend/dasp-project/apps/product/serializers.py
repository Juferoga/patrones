from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    # Todo : Create serializers for child classes
    class Meta:
        model = Product
        fields = ('t_name','t_description','n_ranking','t_type','n_price')
        read_only_fields = ('pk_id',)