from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from autorizar.views import verificar_token,verificar_user
from .models import Dieta,Refeicao,Alimento,Porcao
from .serializer import DietaSerializer,RefeicaoSerializer,AlimentoSerializer,PorcaoSeriliazers
from rest_framework.permissions import AllowAny
from django.http import Http404
# Create your views here.


class DietaView(APIView):

    def get_object(self, pk):
        try:
            dieta = Dieta.objects.filter(user=pk)
            return dieta
        except Dieta.DoesNotExist:
            raise Http404

    def post(self,request,pk):
        if verificar_token(request,pk=pk) and verificar_user(request,pk=pk):
            serializer = DietaSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(data={'token_error':'invalid token'}, status=401)

    def get(self, request, pk):
        if verificar_token(request,pk=pk):
            dieta = self.get_object(pk)
            serializer = DietaSerializer(instance=dieta,many=True)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'token_error':'invalid token'}, status=401)

    def delete(self, request, pk):
        if verificar_token(request,pk=pk) and verificar_user(request,pk=pk):
            dieta = Dieta.objects.get(pk=request.data['pk'])
            dieta.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(data={'token_error':'invalid token'}, status=401)

    def put(self, request, pk):
        if verificar_token(request,pk=pk) and verificar_user(request,pk=pk):
            dieta = Dieta.objects.get(pk=request.data['pk'])
            serializer = DietaSerializer(instance=dieta, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        return Response(data={'token_error':'invalid token'}, status=401)

class RefeicaoView(APIView):

    def post(self,request):
        refeicao = RefeicaoSerializer(data=request.data)
        refeicao.is_valid(raise_exception=True)
        refeicao.save()
        return Response(data=refeicao.data,status=status.HTTP_201_CREATED)

class AlimentoView(APIView):

    def post(self,request):
        alimento = AlimentoSerializer(data=request.data)
        alimento.is_valid(raise_exception=True)
        alimento.save()
        return Response(data=alimento.data,status=status.HTTP_201_CREATED)

class porcaoView(APIView):

    def post(self,request):
        porcao = PorcaoSeriliazers(data=request.data)
        porcao.is_valid(raise_exception=True)
        porcao.save()
        return Response(data=porcao.data,status=status.HTTP_201_CREATED)

