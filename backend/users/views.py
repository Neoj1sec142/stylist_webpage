# views.py
from .models import User
from .serializers import UserDetailSerializer
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer


class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        # ip_address = self.get_client_ip(request)
        # data_with_ip = request.data.copy()
        # encrypted_ip = self.encrypt_ip(ip_address)
        # data_with_ip['ip_address'] = encrypted_ip
        serializer = UserDetailSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def get_client_ip(self, request):
    #     """Get client IP from request object."""
    #     x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    #     if x_forwarded_for:
    #         ip = x_forwarded_for.split(',')[0]  
    #     else:
    #         ip = request.META.get('REMOTE_ADDR')
    #     return ip
    # def encrypt_ip(self, ip_address):
    #     """Encrypt the IP address."""
    #     cipher = Fernet(KEY)
    #     return cipher.encrypt(ip_address.encode()).decode()
    # def dispatch(self, request, *args, **kwargs):
    #     if request.method != 'POST':
    #         return Response({'error': 'Only POST requests are allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    #     return super().dispatch(request, *args, **kwargs)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
  
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request):
        serializer = TokenObtainPairSerializer(data=request.data)
        if serializer.is_valid():
            tokens = serializer.validated_data
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        username = request.data['username']
        user = User.objects.get(username=username)
        data = {
            'access_token': tokens['access'],
            'refresh_token': tokens['refresh'],
            'user': {
                'id': user.pk,
                'username': user.username,
                'email': user.email,
                'is_staff': user.is_staff
            }
        }
        return Response(data, status=status.HTTP_200_OK)
    
class RefreshView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request):
        serializer = TokenRefreshSerializer(data=request.data)
        if serializer.is_valid():
            tokens = serializer.validated_data
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_id = RefreshToken(tokens['refresh']).payload['user_id']
            user = User.objects.get(id=user_id)
        except:
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        data = {
            'access_token': tokens['access'],
            'refresh_token': tokens['refresh'],
            'user': {
                'id': user.pk,
                'username': user.username,
                'email': user.email,
                'is_staff': user.is_staff,
                'is_superuser': user.is_superuser,
                'is_active': user.is_active,
                'is_authenticated': user.is_authenticated,
            }
        }
        return Response(data, status=status.HTTP_200_OK)  
