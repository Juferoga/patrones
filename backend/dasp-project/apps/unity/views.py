from .models import Unity
from rest_framework import viewsets, permissions
from .serializers import UnitySerializer

class UnityViewSet(viewsets.ModelViewSet):
    queryset = Unity.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UnitySerializer
