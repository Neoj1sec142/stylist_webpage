from django.contrib import admin
from .models import Category, CategoryGroup, TrackingIncrementor

admin.site.register(Category)
admin.site.register(CategoryGroup)
admin.site.register(TrackingIncrementor)
