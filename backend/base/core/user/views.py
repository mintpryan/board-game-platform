from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from .permissions import IsSameUser
from core.user.models import User
from .serializers import UserSerializer
# Create your views here.


class UserView(RetrieveAPIView):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated, IsSameUser,)
    serializer_class = UserSerializer
    lookup_field = "public_id"

    def get(self, request, *args, **kwargs):
        obj = self.get_object()
        serializer = self.get_serializer(obj)
        self.check_object_permissions(request=request, obj=obj)
        return Response(serializer.data, HTTP_200_OK)
