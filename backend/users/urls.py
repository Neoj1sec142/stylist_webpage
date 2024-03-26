# urls.py
from .serializers import *
from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('users/create/', UserCreate.as_view()),
    path('users/logout/', UserLogout.as_view()),
    path('users/login/', LoginView.as_view()),
    path('users/refresh/', RefreshView.as_view())
]