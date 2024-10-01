from django.urls import path
from . import views

urlpatterns = [
    path('download/<str:filename>', views.download_file, name='download_file'),
]
