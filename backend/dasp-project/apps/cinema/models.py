from django.db import models

class Cinema(models.Model):
  pk_id = models.AutoField(primary_key=True)
  t_name = models.CharField(max_length=255, verbose_name="Nombre cinema")
  t_description = models.TextField(max_length=255, verbose_name="Descripción")
  
