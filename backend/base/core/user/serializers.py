from core.abstract.serializers import AbstractSerializer
from .models import User
from rest_framework import serializers

class UserSerializer(AbstractSerializer):
    

    class Meta:
        model = User

        fields = ['id', 'username', 'first_name', 'email',
                  'is_active', 'created', 'updated','is_superuser']
        read_only_fields = ['is_active', ]


class UserSimpleSerializer(AbstractSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'email']