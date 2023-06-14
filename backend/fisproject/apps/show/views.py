from rest_framework import viewsets, permissions
from .models import Show
from .serializers import ShowSerializer

class ShowsViewSet(viewsets.ModelViewSet):
  queryset = Show.objects.all()
  permission_classes = (permissions.AllowAny,)
  serializer_class = ShowSerializer
