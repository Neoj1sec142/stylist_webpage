from django.urls import path
from .views import *

urlpatterns = [
    # # Utitliy View
    # path('utils/', PortfolioUtilityView.as_view(), name='portfolio-utility'),
    # ImageGroup URLs
    path('img-group/', ImageGroupList.as_view(), name='img-group-list'),
    path('img-group/create/', ImageGroupCreate.as_view(), name='img-group-create'),
    path('img-group/<int:pk>/', ImageGroupDetail.as_view(), name='img-group-detail'),
    path('img-group/destroy/<int:pk>/', ImageGroupDestroy.as_view(), name='img-group-destroy'),
    path('img-group-sample/', ImageGroupSampleView.as_view(), name='img-group-sample'),
    # CollectionItem URLs
    path('img-item/', ImageItemList.as_view(), name='imgitem-list'),
    path('img-item/create/', ImageItemCreate.as_view(), name='imgitem-create'),
    path('img-item/<int:pk>/', ImageItemDetail.as_view(), name='imgitem-detail'),
    path('img-item/destroy/<int:pk>/', ImageItemDestroy.as_view(), name='imgitem-destroy'),
    # # ItemComment URLs
    # path('item-comment/', ItemCommentList.as_view(), name='item-comment-list'),
    # path('item-comment/<int:pk>/', ItemCommentDetail.as_view(), name='item-comment-detail'),
]