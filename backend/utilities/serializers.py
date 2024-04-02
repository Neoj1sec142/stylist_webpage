from rest_framework import serializers
from .models import Category, CategoryGroup, TrackingIncrementor, LoggerModel

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryGroupSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = CategoryGroup
        fields = '__all__'
        
class TrackingIncrementorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrackingIncrementor
        fields = '__all__'
        
class LoggerSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoggerModel
        fields = '__all__'