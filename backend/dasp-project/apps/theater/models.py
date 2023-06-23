from django.db import models
from apps.cinema.models import Cinema

class Theater(models.Model):
  pk_i = models.AutoField(primary_key=True)
  b_estado = models.BooleanField(default=False)
  fk_cinema = models.ForeignKey(
    Cinema, 
    on_delete=models.CASCADE,
    related_name="Theaters", 
  )
