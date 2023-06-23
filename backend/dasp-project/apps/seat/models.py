from django.db import models
from apps.theater.models import Theater
# Create your models here.

class Seat(models.Model):
    pk_i = models.AutoField(primary_key=True)
    b_estado = models.BooleanField(default=False)
    fk_teather = models.ForeignKey(Theater, null=True, on_delete=models.CASCADE)
