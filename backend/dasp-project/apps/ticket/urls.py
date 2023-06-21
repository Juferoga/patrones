from django.urls import include, path
from rest_framework import routers
from .views import TicketViewSet

router = routers.DefaultRouter()

router.register("", TicketViewSet)

urlpatterns = [
    path('',include(router.urls))
]
