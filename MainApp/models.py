from django.db import models


# Create your models here.
class DoList(models.Model):
    def __str__(self):
        return self.text

    text = models.CharField(max_length=255, null=False)
    done = models.BooleanField(default=False)
