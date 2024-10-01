from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Event,EventRegistration
from .serializers import EventSerializer,EventCreateSerializer

# Create your views here.

# class CreateEvent(generics.CreateAPIView):
#     permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser,)
#     serializer_class = EventSerializer
 
class GetEvents(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        elif self.request.method == 'POST':
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return super().get_permissions()
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return EventSerializer
        elif self.request.method == 'POST':
            return EventCreateSerializer
        return super().get_serializer_class()
        


class EventDetailAPIView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field =['public_id']
    
class EventRegistrationAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field =['public_id']
    
    def post(self,request,public_id):
        event = Event.objects.get(public_id=public_id)
        user = request.user
        
        if EventRegistration.objects.filter(user=user,event=event).exists():
            return Response({"message": "You already have registered"}, status=status.HTTP_400_BAD_REQUEST)
        
        registration = EventRegistration.objects.create(event=event, user=user)
        
        return Response({"message": "Succesfully registered"}, status=status.HTTP_201_CREATED)
    
    def delete(self,request,public_id):
        event = Event.objects.get(public_id=public_id)
        user = request.user
        object = EventRegistration.objects.filter(user=user,event=event)
        if object.exists():
            object.delete()
            return Response({"message": "Succesfully cancel registration"}, status=status.HTTP_201_CREATED)
    
        return Response({"message": "This registration is not found"}, status=status.HTTP_400_BAD_REQUEST)
    
    
    