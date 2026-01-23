from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User, ProfessionalProfile, JobRequest, Message
from .serializers import (
    SignupSerializer, 
    UserSerializer, 
    ProfessionalProfileSerializer, 
    JobRequestSerializer, 
    MessageSerializer
)

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [permissions.AllowAny]

class MeView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class ProfessionalListView(generics.ListAPIView):
    queryset = ProfessionalProfile.objects.all()
    serializer_class = ProfessionalProfileSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        role = self.request.query_params.get('role')
        if role:
            queryset = queryset.filter(role__icontains=role)
        return queryset

class ProfessionalDetailView(generics.RetrieveAPIView):
    queryset = ProfessionalProfile.objects.all()
    serializer_class = ProfessionalProfileSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'id'

class JobRequestCreateView(generics.CreateAPIView):
    queryset = JobRequest.objects.all()
    serializer_class = JobRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class MessageListView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        other_user_id = self.request.query_params.get('with_user')
        if other_user_id:
            return Message.objects.filter(
                (models.Q(sender=user) & models.Q(receiver_id=other_user_id)) |
                (models.Q(sender_id=other_user_id) & models.Q(receiver=user))
            ).order_by('timestamp')
        return Message.objects.filter(models.Q(sender=user) | models.Q(receiver=user)).order_by('-timestamp')

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)
