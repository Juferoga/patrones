from django.urls import include, path
from rest_framework import routers
from .views import MoviesViewSet

router = routers.DefaultRouter()

router.register("", MoviesViewSet)

urlpatterns = [
    path('',include(router.urls))
]
