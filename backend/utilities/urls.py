from django.urls import path
from .views import *

urlpatterns = [
    # # Utitliy Views
    # Category URLs
    path('cat/', CategoryList.as_view(), name='cat-list'),
    path('cat/create/', CategoryCreate.as_view(), name='cat-create'),
    path('cat/<int:pk>/', CategoryDetail.as_view(), name='cat-detail'),
    path('cat/destroy/<int:pk>/', CategoryDestroy.as_view(), name='cat-destroy'),
    # Category Group URLs
    path('cat-group/', CategoryGroupList.as_view(), name='cat-group-list'),
    path('cat-group/create/', CategoryGroupCreate.as_view(), name='cat-group-create'),
    path('cat-group/update/', CategoryGroupUpdate.as_view(), name='cat-group-update'),
    path('cat-group/<int:pk>/', CategoryGroupDetail.as_view(), name='cat-group-detail'),
    path('cat-group/destroy/<int:pk>/', CategoryGroupDestroy.as_view(), name='cat-group-destroy'),
    # # ItemComment URLs
    # path('item-comment/', ItemCommentList.as_view(), name='item-comment-list'),
    # path('item-comment/<int:pk>/', ItemCommentDetail.as_view(), name='item-comment-detail'),
]