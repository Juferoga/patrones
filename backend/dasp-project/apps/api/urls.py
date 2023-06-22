from django.urls import path, include

urlpatterns = [
    path('movies/', include('apps.movies.urls')),
    path('show/', include('apps.show.urls')),
    path('user/', include('apps.user.urls')),
]
