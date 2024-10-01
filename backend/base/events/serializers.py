from rest_framework import serializers
from .models import Event,EventRegistration

class EventSerializer(serializers.ModelSerializer):
    file_name = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ['public_id','title','description','file_name','start','end','is_recurring','recurring_days','recurrence_frequency','recurrence_end_date','tags']


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance.start:
            representation['start'] = instance.start.isoformat()
        if instance.end:
            representation['end'] = instance.end.isoformat()
        return representation
    
    def get_file_name(self, obj):
        return obj.image.name.split('/')[-1] 
    
    def get_tags(self, obj):
        user = self.context['request'].user
        if not user.is_authenticated:
            return []
        if EventRegistration.objects.filter(event=obj, user=user).exists():
            return ['reserved']
        else:
            return []
        
        
    


class EventCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ['public_id','title','description','start','end','is_recurring','recurring_days','recurrence_frequency','recurrence_end_date','image']


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance.start:
            representation['start'] = instance.start.isoformat()
        if instance.end:
            representation['end'] = instance.end.isoformat()
        return representation
