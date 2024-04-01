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