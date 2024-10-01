from rest_framework import serializers

from .models import ItemLikes,Item

class ItemSerializer(serializers.ModelSerializer):
    file_name = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()
    is_like_by_you = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = ['title','description','file_name','likes','is_like_by_you']

    def get_file_name(self, obj):
        return obj.image.name.split('/')[-1] 
    
    def get_likes(self, obj):
        return ItemLikes.objects.filter(item=obj).count()
    
    def get_is_like_by_you(self, obj):
        user = self.context['request'].user
        if not user.is_authenticated:
            return False
        if ItemLikes.objects.filter(item=obj, user=user).exists():
            return True
        else:
            return False