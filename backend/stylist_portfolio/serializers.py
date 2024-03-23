from rest_framework import serializers
from .models import ImageGroup, ImageItem
# from users.serializers import UserSerializer

# class ItemCommentSerializer(serializers.ModelSerializer):
#     author = UserSerializer(many=False, read_only=True)
#     class Meta:
#         model = ItemComment
#         fields = '__all__'


class FirstItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageItem
        fields = ('id', 'img', 'date_created', 'img_description', )

class ImgGroupSerializer(serializers.ModelSerializer):
    imgs = FirstItemSerializer(many=True, read_only=True)
    
    class Meta:
        model = ImageGroup
        fields = ('id', 'client_name', 'client_email', 'client_social', 'style_description', 'photographer_link', 'imgs', 'date_created', 'date_modified')

class ImageItemSerializer(serializers.ModelSerializer):
    img_group = ImgGroupSerializer(many=False, read_only=True)
    # comments = ItemCommentSerializer(many=True, read_only=True)
    class Meta:
        model = ImageItem
        fields = ('id', 'img', 'img_group', 'date_created') #, 'comments'
        

class ImgGroupSampleSerializer(serializers.ModelSerializer):
    first_item = serializers.SerializerMethodField()

    class Meta:
        model = ImageGroup
        fields = ('id', 'client_name', 'client_email', 'client_social', 'style_description', 'first_item', 'date_created', 'date_modified')

    def get_first_item(self, obj):
        # Get the first item related to this collection.
        first_item = obj.items.first()
        if first_item:
            return FirstItemSerializer(first_item).data
        return None