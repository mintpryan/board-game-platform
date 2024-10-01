from django.db import models
from core.abstract.models import AbstractModel
from core.user.models import User
from django.utils import timezone
import uuid
import os
from django.conf import settings
# # Create your models here.

def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join(settings.ASSETS_ROOT, filename)



class Event(AbstractModel):
    DAYS_OF_WEEK = [
        ('MO', 'Monday'),
        ('TU', 'Tuesday'),
        ('WE', 'Wednesday'),
        ('TH', 'Thursday'),
        ('FR', 'Friday'),
        ('SA', 'Saturday'),
        ('SU', 'Sunday'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(max_length=600)
    start = models.DateTimeField()
    end = models.DateTimeField(null=True, blank=True)
    is_recurring = models.BooleanField(default=False)
    recurring_days = models.JSONField(null=True, blank=True)
    recurrence_frequency = models.IntegerField(null=True, blank=True)
    recurrence_end_date = models.DateField(null=True, blank=True) 
    image = models.ImageField(upload_to=get_file_path,null=True,blank=True)

    def __str__(self):
        return self.title


class EventRegistration(AbstractModel):
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING, related_name='event_registrations')
    event = models.ForeignKey(Event,on_delete=models.DO_NOTHING, related_name='registrations')
    
    
    class Meta:
        unique_together = ('event', 'user') 