from django.urls import path
from .views import GetEvents,EventDetailAPIView,EventRegistrationAPIView
urlpatterns = [
    path('', GetEvents.as_view()),
    path('<str:public_id>/register/', EventRegistrationAPIView.as_view()),
    path('<str:public_id>', EventDetailAPIView.as_view()),
]
