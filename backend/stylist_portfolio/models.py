from django.db import models

class ImageGroup(models.Model):
    client_name = models.CharField(max_length=150)
    client_email = models.CharField(max_length=150, null=True, blank=True)
    client_social = models.CharField(max_length=100, null=True, blank=True)
    style_description = models.TextField(null=True, blank=True)
    imgs = models.ManyToManyField('ImageItem', blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True) 
    def __str__(self):
        return self.client_name

class ImageItem(models.Model):
    img = models.ImageField(upload_to='portfolio/')
    # comments = models.ManyToManyField(ItemComment, blank=True)
    img_description = models.TextField(null=True, blank=True)
    img_group = models.ForeignKey(ImageGroup, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.img.name
    
# class ItemComment(models.Model):
#     author = models.CharField(max_length=150)
#     item = models.ForeignKey('CollectionItem', on_delete=models.CASCADE)
#     content = models.TextField()
#     date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
#     date_modified = models.DateTimeField(auto_now=True, null=True, blank=True) 
