

retas = {

  'distancia':[10,['km','hm','dam','m','dm','cm','mm']],
  'massa':[10,['kg','hg','dag','g','dg','cg','mg']],
  'litros':[10,['kl','hl','dal','l','dl','cl','ml']],
  'tempo':[60,['h','m','s']],
  'area':[100,['km','hm','dam','m','dm','cm','mm']],
  'volume':[1000,['km','hm','dam','m','dm','cm','mm']],
  'velocidade':[3.6,['m/s','km/h']],
}

def converter_basico(fr,to,num,type):

  reta = retas[type][1]
  fator = retas[type][0]
  
  dif = reta.index(to) - reta.index(fr)


  return (num * (fator**dif))

def inverter_texto(frase):

    nova_frase = ''
    for i in range((len(frase)-1),-1,-1):
        nova_frase += frase[i]
    return nova_frase

def cod_cesar(texto,passo,tipo=1):
    alfa = 'abcdefghijklmnopqrstuvwxyz'
    nov = ''

    if (tipo == 1):

        for i in range(len(texto)):
            alg = texto[i]
            ind = alfa.index(alg)
            if not(i == ''):
                n =ind+passo
                if (n > 25):
                    n -= 26
                
                nov += alfa[n]
            
        
        return nov
    

    if (tipo == -1):

        for i in range(len(texto)):
            alg = texto[i]
            ind = alfa.index(alg)
            if not(i == ''):
                n =ind-passo
                if (n < 0):
                    n += 26
                
                nov += alfa[n]
            
        
        return nov
        
    
def cifra_vignerie(texto,chave,tipo=1):
    newalfa = ''
    novotexto = ''
    alfa = 'abcdefghijklmnopqrstuvwxyz'

    
    if (len(texto) > len(chave)):
        dif = len(texto) - len(chave)
        ind = 0
        for i in range(dif):
            chave += chave[ind]
            if (ind%len(chave) == 0):
                ind = 0
            
            ind += 1
            
        
        
    if (tipo == 1):
        

        for i in range(len(texto)):
            if (texto[i] == ''):
                novotexto += ''
            else:
                a = chave[i]
                newalfa = alfa[alfa.index(a):len(alfa)] + alfa[0:alfa.index(a)]
                indlt = alfa.index(texto[i])
                novotexto += newalfa[indlt]
            
            
        

        return novotexto
    
    if (tipo == -1):
        
        for i in range(len(texto)):
            a = chave[i]
            newalfa = alfa[alfa.index(a):len(alfa)] + alfa[0:alfa.index(a)]
            indlt = newalfa.index(texto[i])
            novotexto += alfa[indlt]
        

        return novotexto

    

    




print(cifra_vignerie('ljo','limao',-1))