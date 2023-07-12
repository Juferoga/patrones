from django.urls import include, path
from rest_framework import routers
from .views import PurchaseViewSet, MakeSaleView, GenerateInvoiceView, MakeSaleViewOnlyData

router = routers.DefaultRouter()

router.register("", PurchaseViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path("sale", MakeSaleView.as_view()),
    path('invoice/<int:purchase_id>/', GenerateInvoiceView.as_view(), name='generate_invoice'),
    path("sale-data", MakeSaleViewOnlyData.as_view()),
]