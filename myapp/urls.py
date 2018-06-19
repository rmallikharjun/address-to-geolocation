from django.conf.urls import url

from . import views

app_name = "myapp"

urlpatterns = [
    url('', views.index, name='index'),
]
