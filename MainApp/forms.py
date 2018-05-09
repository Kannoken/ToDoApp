from django import forms
from .models import *


class PostForm(forms.ModelForm):
    class Meta:
        model = DoList
        fields = ('text',)

    text = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'id': "myInput", 'placeholder': 'Введите текст'}), label='' )
