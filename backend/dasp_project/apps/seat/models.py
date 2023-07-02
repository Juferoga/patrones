from django.db import models
from apps.product.models import Ticket
from apps.theater.models import Theater

class Seat(models.Model):
  pk_id = models.AutoField(primary_key=True)
  t_type = models.CharField(max_length=255)
  b_state = models.BooleanField(default=False)
  fk_ticket = models.ForeignKey(Ticket, null=True, on_delete=models.CASCADE)
  fk_theater = models.ForeignKey(Theater, null=True, on_delete=models.CASCADE)
