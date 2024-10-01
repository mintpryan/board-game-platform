from django.urls import path
from .views import ItemListCreateAPIView
urlpatterns = [
    path('', ItemListCreateAPIView.as_view()),
]
