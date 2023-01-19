from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework import generics,permissions,status
from rest_framework.views import APIView
from rest_framework.response import Response
from Accounts.serializers import SellerSignupSerializer, CustomerSignupSerializer,UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from Accounts.permissions import IsSellerUser, IsCustomerUser

# Create your views here.
class SellerSignupView(generics.GenericAPIView):
    serializer_class=SellerSignupSerializer
    def post(self, request ,*args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"Account Created Sucessfully"
        })
    
class CustomerSignupView(generics.GenericAPIView):
    serializer_class=CustomerSignupSerializer
    def post(self, request ,*args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"Account Created Sucessfully"
        })
    
class CustomAuthToken(ObtainAuthToken):
    def post(self,request, *args, **kwargs):
        serializer=self.serializer_class(data=request.data,context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        token, created= Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'user_id':user.pk,
            'is_seller':user.is_seller
        })
    
class LogoutView(APIView):
    def post(self,request,format=None):
        request.auth.delete(status=status.HTTP_200_OK)

class SellerOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsSellerUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user
    
class CustomerOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsCustomerUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user
    

