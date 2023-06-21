from django.urls import include, path
from rest_framework import routers
from .views import ShowsViewSet

router = routers.DefaultRouter()

router.register("",ShowsViewSet)

urlpatterns = [
    path("", include(router.urls))
]
