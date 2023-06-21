from django.urls import include, path
from rest_framework import routers
from .views import TypeViewSet

router = routers.DefaultRouter()

router.register("", TypeViewSet)

urlpatterns = [
    path('',include(router.urls))
]
