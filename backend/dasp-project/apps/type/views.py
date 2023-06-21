from .models import Type
from rest_framework import viewsets, permissions
from .serializer import TypeSerializer

class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = TypeSerializer
