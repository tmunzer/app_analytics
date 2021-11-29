from django.urls import path

from . import views

urlpatterns = [
    path('sites/stats/', views.get_site_stats, name='get_site_stats'),
    path('sites/clients/', views.get_sites_clients, name='get_sites_clients'),
    path('login/', views.login, name='login'),
    path('sites/', views.get_sites, name='get_sites'),    
    path('sites/wlans/', views.get_site_wlans, name='get_sites_wlans'),    
    #path('sites/derived/', views.get_site_derived, name='get_site_derived'),
    path('script', views.script, name="googlemaps"),
    path('gap', views.gap, name="gap"),
    path('disclaimer', views.disclaimer, name="disclaimer")
]

