from . import views
from django.urls import path

urlpatterns = [
    path("post/", views.PostListCreate.as_view(), name="post-list"),
    path("post/delete/<int:pk>/", views.PostDelete.as_view(), name="post-delete"),
    path("post/update/<int:pk>/", views.PostUpdate.as_view(), name="post-update")
]

# Models -> Serializers -> Views -> Urls