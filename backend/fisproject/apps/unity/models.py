from django.db import models
from apps.type.models import Type

class Unity(models.Model):
  pk_id       = models.AutoField(primary_key=True)
  t_name      = models.CharField(max_length=30)
  t_location  = models.CharField(max_length=30)
  fk_type     = models.ForeignKey(Type, on_delete=models.CASCADE,null=True,blank=True)
