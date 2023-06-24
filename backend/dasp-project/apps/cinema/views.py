from .models import Cinema
from rest_framework import viewsets, permissions
from .serializers import CinemaSerializer

class CinemaViewSet(viewsets.ModelViewSet):
    queryset = Cinema.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = CinemaSerializer
