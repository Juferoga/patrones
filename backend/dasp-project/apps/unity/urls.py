from django.urls import include, path
from rest_framework import routers
from .views import UnityViewSet

router = routers.DefaultRouter()

router.register("", UnityViewSet)

urlpatterns = [
    path('',include(router.urls))
]
