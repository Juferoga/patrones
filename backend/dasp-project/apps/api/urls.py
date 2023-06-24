from django.urls import path, include

urlpatterns = [
    path('movies/', include('apps.movies.urls')),
    path('show/', include('apps.show.urls')),
    path('user/', include('apps.user.urls')),
    # New model 
    path('cinema/', include('apps.cinema.urls')),
    path('product/', include('apps.product.urls')),
    path('seat/', include('apps.seat.urls')),
    path('theater/', include('apps.theater.urls')),
]
