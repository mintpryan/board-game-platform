from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from core.abstract import AbstractModel, AbstractManager


class UserManager(BaseUserManager, AbstractManager):
    def create_user(self, username, password=None, *args, **kwargs):
        if username is None:
            raise TypeError("Users must have a username.")
        if password is None:
            raise TypeError("Users must have a password.")

        user = self.model(username=username, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, *args, **kwargs):
        if username is None:
            raise TypeError("Superuser must have a username.")
        if password is None:
            raise TypeError("Superuser must have a password.")

        user = self.model(username=username, **kwargs)
        user.is_superuser = True
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractModel, AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100, unique=True, db_index=True)
    first_name = models.CharField(max_length=100)
    email = models.EmailField(db_index=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = "username"

    objects = UserManager()

    @property
    def is_staff(self):
        return self.is_superuser

    @is_staff.setter
    def is_staff(self, value):
        self.is_superuser = value
