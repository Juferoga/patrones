from django.urls import include, path
from rest_framework import routers
from .views import SnackViewSet

router = routers.DefaultRouter()

router.register("", SnackViewSet)

urlpatterns = [
    path('',include(router.urls))
]
