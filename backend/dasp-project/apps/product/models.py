from django.db import models
from apps.user.models import Client
from django.core.validators import MinValueValidator, MaxValueValidator
from .data import PRODUCT_TYPE 

class Product(models.Model):
  pk_id = models.AutoField(primary_key=True)
  t_name = models.CharField(max_length=255,verbose_name="Nombre del producto", null=True)
  t_descripcion = models.CharField(max_length=255,verbose_name="Descripción del producto", null=True)
  n_valoracion = models.IntegerField(null=True, blank=True, default=5, validators=[MaxValueValidator(5),MinValueValidator(1)])
  t_tipo = models.CharField(choices=PRODUCT_TYPE, verbose_name="Tipo de producto", max_length=255)
  n_precio = models.IntegerField(null=True, blank=True)
  fk_cliente = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="ProductoGeneral")

class Snack():
  pk_snack_id = models.AutoField(primary_key=True)
  n_stock = models.IntegerField(null=True)
  fk_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="Producto")

class Ticket():
  pk_ticket_id = models.AutoField(primary_key=True)
  n_stock = models.IntegerField(null=True)
  fk_product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="Ticket")