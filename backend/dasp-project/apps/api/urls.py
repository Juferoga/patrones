from django.urls import path, include

urlpatterns = [
    path('movies/', include('apps.movies.urls')),
    path('show/', include('apps.show.urls')),
    path('snacks/', include('apps.snacks.urls')),
    path('ticket/', include('apps.ticket.urls')),
    path('user/', include('apps.user.urls')),
    path('unity/', include('apps.unity.urls')),
    path('type/', include('apps.type.urls')),
]
