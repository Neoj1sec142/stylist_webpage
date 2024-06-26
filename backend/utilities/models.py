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
 
class LogType(models.TextChoices):
    ERROR = 'Error'
    WARNING = 'Warning'
    NORMAL = 'Normal'
    SEVERE_ISSUE = 'Admin Notice'
        
   
class LoggerModel(models.Model):
    log_type = models.CharField(max_length=50, choices=LogType.choices, default=LogType.NORMAL)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    has_been_viewed = models.BooleanField(default=False, blank=True)
    def __str__(self):
        return 'Viewed ' if self.has_been_viewed else 'NEW! ' + f'| {str(self.date_created)}' 
    
    
class Appointment(models.Model):
    req_date = models.DateField()
    req_time = models.TimeField()
    set_date = models.DateField(null=True, blank=True)
    set_time = models.TimeField(null=True, blank=True)
    client_name = models.CharField(max_length=250)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    has_been_viewed = models.BooleanField(default=False, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return 'Viewed ' if self.has_been_viewed else 'NEW! ' + f'| {str(self.date_created)}' 