from rest_framework import permissions
from rest_framework.exceptions import PermissionDenied


class IsSameUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj == request.user:
            return True
        else:
            raise PermissionDenied("You can't view this user profile")
