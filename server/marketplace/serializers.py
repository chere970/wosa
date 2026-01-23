from rest_framework import serializers
from .models import User, ProfessionalProfile, Skill, JobRequest, Message

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['name']

class ProfessionalProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = ProfessionalProfile
        fields = ['id', 'email', 'role', 'location', 'bio', 'hourly_rate', 'rating', 'reviews_count', 'completed_jobs', 'skills']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'is_professional', 'is_client']

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    is_professional = serializers.BooleanField(default=False)
    
    class Meta:
        model = User
        fields = ['email', 'password', 'is_professional']

    def create(self, validated_data):
        is_professional = validated_data.pop('is_professional', False)
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            is_professional=is_professional,
            is_client=not is_professional
        )
        return user

class JobRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobRequest
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    sender_email = serializers.EmailField(source='sender.email', read_only=True)
    
    class Meta:
        model = Message
        fields = ['id', 'sender', 'sender_email', 'receiver', 'content', 'timestamp', 'is_read']
