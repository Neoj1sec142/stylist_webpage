from rest_framework import generics, permissions, status
from .models import Category, CategoryGroup, TrackingIncrementor
from .serializers import CategorySerializer, CategoryGroupSerializer, TrackingIncrementorSerializer
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

class CategoryGroupUpdate(generics.RetrieveUpdateDestroyAPIView):
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
    
    
class CreateTracker(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = TrackingIncrementor.objects.all()
    serializer_class = TrackingIncrementorSerializer
    
class IncrementTracker(APIView):
    
    def put(self, request, pk, *args, **kwargs):
        try:
            tracker = TrackingIncrementor.objects.get(pk=pk)
            if tracker.count >= tracker.max_field_len:
                tracker.times_incremented += 1
                tracker.count = 0
            else:
                tracker.count += 1
            tracker.save()
            serializer = TrackingIncrementorSerializer(tracker)
            if serializer:
                return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        except TrackingIncrementor.DoesNotExist as e:
            return Response("error", e, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, pk, *args, **kwargs):
        pass