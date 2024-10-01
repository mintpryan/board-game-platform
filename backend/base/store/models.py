from django.db import models
from core.abstract.models import AbstractModel
from core.user.models import User
import uuid
import os
from django.conf import settings
# Create your models here.


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join(settings.ASSETS_ROOT, filename)

class Item(AbstractModel):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=600)
    image = models.ImageField(upload_to=get_file_path,null=True,blank=True)
    
    def __str__(self):
        return self.title


class ItemLikes(AbstractModel):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING,related_name='user_likes')
    item = models.ForeignKey(Item, on_delete=models.DO_NOTHING,related_name='item_likes')
    
    class Meta:
        unique_together = ('item', 'user') 