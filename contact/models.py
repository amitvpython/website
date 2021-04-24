from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    subject = models.CharField(max_length=100)
    description = models.TextField()
    def __str__(self):
        return '{0}'.format(self.name)