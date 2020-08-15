from django.db import models

# Create your models here.
class Student(models.Model):
    name= models.CharField("Name",max_length=256)
    email = models.EmailField()
    document =  models.CharField("Documents", max_length=256)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    def __str__(self):
        return self.name