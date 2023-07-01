from django.urls import path
from .views import EmployeeCreateView

urlpatterns = [
  path('employees/', EmployeeCreateView.as_view(), name='employee_create'),
]
