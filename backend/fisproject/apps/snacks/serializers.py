from rest_framework import serializers
from .models import Snack

class SnackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snack
        fields = ('t_name','n_value','q_available')
        read_only_fields = ("pk_id","fk_client")