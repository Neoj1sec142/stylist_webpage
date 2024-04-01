from rest_framework import generics, permissions, status
from .models import ImageGroup, ImageItem
from .serializers import ImageItemSerializer, ImgGroupSerializer, ImgGroupSampleSerializer
from rest_framework.parsers import MultiPartParser, FormParser
# from django.db.models import Count
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response


# error_msg, status_code = log_error(self.request, e)
# error_serializer = ErrorMessageSerializer(error_msg)

class ImageGroupList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = ImageGroup.objects.all()
    serializer_class = ImgGroupSerializer
    # def get(self, request, *args, **kwargs):
    #     try:
    #         return super(ImageGroupList, self).get(request, *args, **kwargs)
    #     except Exception as e:
    #         return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        
class ImageGroupCreate(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = ImageGroup.objects.all()
    serializer_class = ImgGroupSerializer
    
    # def post(self, request, *args, **kwargs):
    #     try:
    #         return super(ImageGroupCreate, self).post(request, *args, **kwargs)
    #     except Exception as e:
    #         return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        

class ImageGroupDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = ImageGroup.objects.all()
    serializer_class = ImgGroupSerializer
    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            items = ImageItem.objects.filter(collection=instance)
            itemserializer = ImageItemSerializer(items, many=True)
            data = {
                "group": serializer.data,
                "imgs": itemserializer.data
            }
            return Response(data)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    
class ImageGroupDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = ImageGroup.objects.all()
    serializer_class = ImgGroupSerializer
    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            data = serializer.data
            return Response(data)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)

class ImageGroupSampleView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = ImageGroup.objects.all()
    serializer_class = ImgGroupSampleSerializer
    def get(self, request, *args, **kwargs):
        try:
            return super(ImageGroupSampleView, self).get(request, *args, **kwargs)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    
# CollectionItem Views
class ImageItemList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = ImageItem.objects.all()
    serializer_class = ImageItemSerializer
    def get(self, request, *args, **kwargs):
        try:
            return super(ImageItemList, self).get(request, *args, **kwargs)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    
class ImageItemCreate(generics.CreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = ImageItem.objects.all()
    serializer_class = ImageItemSerializer
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        try:
            return super(ImageItemCreate, self).post(request, *args, **kwargs)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)

class ImageItemDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ImageItemSerializer
    queryset = ImageItem.objects.all()

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            # comments = ItemComment.objects.filter(item=instance)
            # comments_serializer = ItemCommentSerializer(comments, many=True)
            data = serializer.data
            # data['comments'] = comments_serializer.data
            return Response(data)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    
class ImageItemDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = ImageItem.objects.all()
    serializer_class = ImageItemSerializer
    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            data = serializer.data
            return Response(data)
        except Exception as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
