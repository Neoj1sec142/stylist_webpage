from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=150)
    def __str__(self):
        return f'Cat: {self.name}'
    
class CategoryGroup(models.Model):
    title = models.CharField(max_length=150)
    categories = models.ManyToManyField(Category, blank=True)
    is_active = models.BooleanField(default=True, blank=True)
    def __str__(self):
        return f'Cat-Group: {self.title}'
    

class TrackingIncrementor(models.Model):
    count = models.IntegerField(default=0, blank=True)
    max_field_len = models.IntegerField(default=2000000000, blank=True)
    times_incremented = models.IntegerField(default=0, blank=True)
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True) 
    def __str__(self):
        return self.title
    