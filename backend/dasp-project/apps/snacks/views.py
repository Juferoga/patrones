from .models import Snack
from rest_framework import viewsets, permissions
from .serializers import SnackSerializer

class SnackViewSet(viewsets.ModelViewSet):
    queryset = Snack.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = SnackSerializer
