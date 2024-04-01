from rest_framework import generics, permissions, status
from .models import Category, CategoryGroup
from .serializers import CategorySerializer, CategoryGroupSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response


# error_msg, status_code = log_error(self.request, e)
# error_serializer = ErrorMessageSerializer(error_msg)

class CategoryCreate(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryDestroy(generics.DestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryGroupCreate(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = CategoryGroup.objects.all()
    serializer_class = CategoryGroupSerializer
    
class CategoryGroupDestroy(generics.DestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = CategoryGroup.objects.all()
    serializer_class = CategoryGroupSerializer
    
class CategoryGroupList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = CategoryGroup.objects.all()
    serializer_class = CategoryGroupSerializer
    
class CategoryGroupDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = CategoryGroup.objects.all()
    serializer_class = CategoryGroupSerializer