from .models import Ticket
from rest_framework import viewsets, permissions
from .seralizers import TicketSerializer

# Create your views here.
class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = TicketSerializer
