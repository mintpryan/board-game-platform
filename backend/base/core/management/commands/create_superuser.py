from django.core.management.base import BaseCommand
from core.user.models import User

class Command(BaseCommand):
    help = 'Create a superuser'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@example.com',
                password='adminpassword'
            )
            
            self.stdout.write(self.style.SUCCESS('Successfully created new superuser'))
        else:
            self.stdout.write(self.style.WARNING('Superuser already exists'))