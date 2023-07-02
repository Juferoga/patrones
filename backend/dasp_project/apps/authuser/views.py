from rest_framework import generics
from .models import Employee, Customer
from .serializers import EmployeeSerializer, CustomerSerializer

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response



class EmployeeCreateView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CustomerCreateView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        response_data = {
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        }

        if isinstance(user, Employee):
            response_data['role'] = user.t_rol
            response_data['username'] = user.get_full_name()
        elif isinstance(user, Customer):
            response_data['role'] = 'Cliente'
            response_data['username'] = user.get_full_name()
        else:
            response_data['role'] = 'Administrador Administrador'
            response_data['username'] = user.get_full_name()

        return Response(response_data)