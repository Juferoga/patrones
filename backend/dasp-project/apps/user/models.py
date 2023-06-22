from django.contrib.auth.models import AbstractUser, BaseUserManager
from .data import *
from .managers import *
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class User(AbstractUser):
  n_phone = models.DecimalField(max_digits=20,decimal_places=0,null=True)
  t_role = models.TextField(choices=ROLES, verbose_name="rol", null=True)
  n_cc = models.IntegerField(default=0, verbose_name="Número de documento")
  t_cc = models.TextField(choices=ID_TYPES, verbose_name="Tipo de identificación")

  objects = UserManager()

  def get_phone(self):
    return self.phone
  
  def get_role(self):
    return ROLES[int(self.role)-1][1]

  def __str__(self):
    return f'{self.first_name} {self.last_name}, {self.get_role}'
  
  class Meta:
    verbose_name = "Usuario"
    verbose_name_plural = "Usuarios"

class Client (User):
  pk_id = models.AutoField(
    verbose_name="Identificador cliente",
    primary_key=True, 
    auto_created=True
  )
  n_points = models.DecimalField( 
    max_digits=1, 
    decimal_places=1,
    validators=[MinValueValidator(0),MaxValueValidator(5)]
  )
  fk_user = models.ForeignKey(
    User, 
    on_delete=models.CASCADE,
    related_name="clients"
  )

class Employee (User):
  pk_id = models.AutoField(
    verbose_name="Identificador empleado",
    primary_key=True, 
    auto_created=True
  )
  n_salary = models.DecimalField( 
    max_digits=10, 
    decimal_places=4
  )
  d_start_date_contract = models.DateTimeField()
  d_end_date_contract = models.DateTimeField()
  b_is_active = models.BooleanField(default=True)
  fk_user = models.ForeignKey(
    User, 
    on_delete=models.CASCADE,
    related_name="employees"
  )