# Generated by Django 3.1 on 2020-08-15 10:55

from django.db import migrations

def create_data(apps, schema_editor):
    Student=apps.get_model('students', 'Student')
    Student(name="tushar Mohan", email="tushar@gmail.com", document="1234151",phone="9876543210").save()
class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
    ]
