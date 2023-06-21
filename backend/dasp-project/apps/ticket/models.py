from django.db import models
from apps.show.models import Show
from apps.user.models import Client

class Ticket(models.Model):
  pk_id     = models.AutoField(primary_key=True)
  t_type    = models.CharField(max_length=30)
  t_status  = models.CharField(max_length=12)
  fk_show   = models.ForeignKey(Show, verbose_name="", on_delete=models.CASCADE)
  fk_cliente  = models.ForeignKey(Client, null=False, on_delete=models.CASCADE)