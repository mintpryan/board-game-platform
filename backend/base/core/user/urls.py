from django.contrib import admin
from django.urls import path
from .views import UserView
urlpatterns = [
    path('<str:public_id>/', UserView.as_view()),
]
