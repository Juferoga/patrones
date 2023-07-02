from django.urls import path
from .views import EmployeeCreateView, CustomerCreateView

urlpatterns = [
  path('employees/', EmployeeCreateView.as_view(), name='employee_create'),
  path('customers/', CustomerCreateView.as_view(), name='customer_create'),
]
