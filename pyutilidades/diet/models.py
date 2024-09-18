from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Dieta(models.Model):

    objetivo = models.CharField(max_length=300)
    dt_in = models.DateField(auto_now_add=True)
    dt_mod = models.DateField(auto_now=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Refeicao(models.Model):

    nome = models.CharField(max_length=300)
    preparo = models.CharField(max_length=10000)
    horario = models.TimeField()
    dieta = models.ForeignKey(Dieta,on_delete=models.CASCADE,related_name='refeicao')

class Alimento(models.Model):

    nome = models.CharField(max_length=200)
    caloria = models.IntegerField()

class Porcao(models.Model):

    refeicao = models.ForeignKey(Refeicao,on_delete=models.CASCADE,related_name='porcao')
    alimento = models.ForeignKey(Alimento,on_delete=models.CASCADE,related_name='alimento')
    quantidade = models.IntegerField()


