from django.db import models
from apps.user.models import Client

class Snack(models.Model):
  pk_id       = models.AutoField(primary_key=True)
  t_name      = models.CharField(max_length=30)
  n_value     = models.IntegerField(default=0)
  q_available = models.IntegerField(default=0)
  fk_cliente  = models.ForeignKey(Client, null=False, on_delete=models.CASCADE)
