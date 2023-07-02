from django.db import models
from apps.product.models import Ticket

class Seat(models.Model):
  pk_id = models.AutoField(primary_key=True)
  t_type = models.CharField(max_length=255)
  b_state = models.BooleanField(default=False)
  fk_ticket = models.ForeignKey(Ticket, null=True)
