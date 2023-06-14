from .models import Movies
from rest_framework import viewsets, permissions
from .serializers import MoviesSerializer

# Quien? como? y a que? pueden acceder
class MoviesViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = MoviesSerializer
