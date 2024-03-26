from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # ip_address = models.TextField(null=True, blank=True)
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='user_custom_set',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='user_custom'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='user_custom_set',
        help_text='Specific permissions for this user.',
        related_query_name='user_custom'
    )
    def __str__(self):
        return self.username
    