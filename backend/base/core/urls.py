
from django.urls import path, include
from core.auth.views import RegisterView, LoginView, RefreshView
urlpatterns = [
    path('auth/register/', RegisterView.as_view()),
    path('auth/login/', LoginView.as_view()),
    path('auth/refresh/', RefreshView.as_view()),
    path('user/', include('core.user.urls')),
]
