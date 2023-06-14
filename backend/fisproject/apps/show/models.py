from django.db import models
from apps.movies.models import Movies

class Show(models.Model):
  pk_id     = models.AutoField(primary_key=True)
  d_time    = models.DateTimeField()
  fk_movie  = models.ForeignKey(Movies, verbose_name="Llave primaria películas", on_delete=models.CASCADE)

