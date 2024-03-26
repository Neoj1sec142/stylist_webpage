from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class UserDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('username','is_active', 'is_staff', 'is_superuser', 'email', 'id', 'first_name', 'last_name', 'password') #, 'ip_address'
        extra_kwargs = {
            'password': {'write_only': True},
            # 'ip_address': {'write_only': True}
            }
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)
        instance.save()
        return instance
