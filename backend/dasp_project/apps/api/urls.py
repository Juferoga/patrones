from django.urls import path, include

urlpatterns = [
  path('user/', include('apps.authuser.urls')),
  path('product/', include('apps.product.urls')),
  path('purchase/', include('apps.purchase.urls')),
  path('movie/', include('apps.movie.urls')),
  path('function/', include('apps.function.urls')),
  path('theater/', include('apps.theater.urls')),
  path('cinema/', include('apps.cinema.urls')),
  path('seat/', include('apps.seat.urls')),
]