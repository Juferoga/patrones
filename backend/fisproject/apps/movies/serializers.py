from rest_framework import serializers
from .models import Movies

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ('b_adult','t_actors','t_overview','t_title','n_rating','t_genre')
        read_only_fields = ('pk_id',)