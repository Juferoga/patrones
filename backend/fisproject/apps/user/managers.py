from django.contrib.auth.models import BaseUserManager
from .data import ADMINISTRATOR,SELLER,CLIENT

class UserManager(BaseUserManager):
  use_in_migrations = True

  def _create_user(self, username, password, **kwargs):
    kwargs.setdefault("password", CLIENT)
    user = self.model(username=username, **kwargs)
    user.set_password(password)
    user.save()
    return user

  def create_user(self, username, password=None, **kwargs):
    kwargs.setdefault('is_superuser', False)
    return self._create_user(username, password, **kwargs)

  def create_superuser(self, username, password, **kwargs):
    kwargs.setdefault('is_superuser', True)
    kwargs.setdefault("is_staff", True)
    kwargs.setdefault("role",ADMINISTRATOR)
    return self._create_user(username, password,**kwargs)