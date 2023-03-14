from django import forms
from .models import URL

class URLForm(forms.ModelForm):
    class Meta:
        model = URL
        fields = ['url']