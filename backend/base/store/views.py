from django.shortcuts import render
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from rest_framework import status
from rest_framework import permissions

# Create your views here.

class ItemListCreateAPIView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        elif self.request.method == 'POST':
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return super().get_permissions()
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ItemSerializer
        # elif self.request.method == 'POST':
        #     return EventCreateSerializer
        return super().get_serializer_class()