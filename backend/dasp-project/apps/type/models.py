from django.db import models

class Type(models.Model):
  pk_id   = models.AutoField(primary_key=True)
  t_tipo  = models.CharField(max_length=30)