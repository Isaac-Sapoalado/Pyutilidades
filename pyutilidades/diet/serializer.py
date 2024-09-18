from rest_framework import serializers
from .models import Dieta,Alimento,Refeicao,Porcao


class DietaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dieta
        fields = ['objetivo','dt_in','dt_mod','user']

class RefeicaoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Refeicao
        fields = ['nome','preparo','horario','dieta']

class AlimentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Alimento
        fields = ['nome','caloria']

class PorcaoSeriliazers(serializers.ModelSerializer):

    class Meta:
        model = Porcao
        fields = ['refeicao','alimento','quantidade']