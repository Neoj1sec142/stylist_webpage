from django.contrib import admin
from .models import Category, CategoryGroup, TrackingIncrementor, LoggerModel, Appointment

admin.site.register(Category)
admin.site.register(CategoryGroup)
admin.site.register(TrackingIncrementor)
admin.site.register(LoggerModel)
admin.site.register(Appointment)
