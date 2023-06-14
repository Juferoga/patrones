from django.db import models

class Movies(models.Model):
  pk_id      = models.AutoField(primary_key=True)
  b_adult    = models.BooleanField(verbose_name='Adultos',default=False)
  t_actors   = models.CharField(max_length=30,verbose_name="Actores",blank='')
  t_overview = models.CharField(max_length=30,verbose_name="Sinopsis",blank='')
  t_title    = models.CharField(max_length=30,verbose_name='Titulo', blank="")
  n_rating   = models.IntegerField(verbose_name='Calificacion')
  t_genre    = models.CharField(max_length=30,verbose_name="Genero", blank='No aplica')


