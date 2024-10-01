from django.apps import AppConfig
from django.db.models.signals import post_migrate
from django.core.management import call_command

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    def ready(self):
        print("test")
        post_migrate.connect(create_default_superuser, sender=self)

def create_default_superuser(sender, **kwargs):
    call_command('create_superuser')