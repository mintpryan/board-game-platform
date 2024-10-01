from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid(raise_exception=True)):
            user = serializer.save()
            refresh = RefreshToken.for_user(user=user)
            res = {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
            return Response({"user": serializer.data,
                            "refresh": res["refresh"],
                             "token": res["access"]}, status=HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class LoginView(CreateAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if (serializer.is_valid(raise_exception=True)):
            return Response(serializer.validated_data, status=HTTP_200_OK)
        else:
            return Response(serializer.errors, status=HTTP_401_UNAUTHORIZED)


class RefreshView(CreateAPIView, TokenRefreshView):
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=HTTP_200_OK)
