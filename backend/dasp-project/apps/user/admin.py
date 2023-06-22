from django.contrib import admin
from .models import User
from django.contrib.auth import get_user_model

@admin.register(get_user_model())
class UserAdmin(admin.ModelAdmin):
  readonly_fields = ("email", "username")
  list_display = ("username", "t_role", "n_phone", "is_superuser", "is_staff")
  fieldsets = (
    (
      "Información básica", 
      {
        "fields": ("username","email","n_phone","t_role","password")
      }
    ),(
      "Información específica",
      {
        "fields":(
          ("first_name", "last_name"),
          ("is_superuser", "is_staff")
        )
      }
    )
  )
  list_filter = ("is_superuser", "t_role")
  search_fields = [
    "username",
    "first_name",
    "last_name"
  ]
  search_fields = [
    "username"
  ]

