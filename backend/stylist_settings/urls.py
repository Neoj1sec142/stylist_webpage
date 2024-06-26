from django.contrib import admin
from django.conf.urls import include
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/portfolio/', include('stylist_portfolio.urls')),
    path('api/utils/', include('utilities.urls')),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='dist/client/index.html'))]
