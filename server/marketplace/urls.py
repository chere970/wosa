from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    SignupView, 
    MeView, 
    ProfessionalListView, 
    ProfessionalDetailView,
    JobRequestCreateView,
    MessageListView
)

urlpatterns = [
    # Auth
    path('auth/signup/', SignupView.as_view(), name='signup'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/me/', MeView.as_view(), name='me'),
    
    # Marketplace
    path('professionals/', ProfessionalListView.as_view(), name='professional-list'),
    path('professionals/<int:id>/', ProfessionalDetailView.as_view(), name='professional-detail'),
    path('jobs/', JobRequestCreateView.as_view(), name='job-create'),
    
    # Messages
    path('messages/', MessageListView.as_view(), name='message-list'),
]
