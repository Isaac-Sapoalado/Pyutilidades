
const retas = {
    
    'distancia':[10,['km','hm','dam','m','dm','cm','mm']],
    'massa':[10,['kg','hg','dag','g','dg','cg','mg']],
    'litros':[10,['kl','hl','dal','l','dl','cl','ml']],
    'tempo':[60,['h','m','s']],
    'area':[100,['km','hm','dam','m','dm','cm','mm']],
    'volume':[1000,['km','hm','dam','m','dm','cm','mm']],
    'velocidade':[3.6,['m/s','km/h']],
}

function converter_basico(from,to,num,type){

    let reta = retas[type][1]
    let fator = retas[type][0]
    var dif = reta.indexOf(to) - reta.indexOf(from)


    return (num * (fator**dif))

}

function inverter_texto(frase){

    let nova_frase = ''
    for (let i=frase.length-1;i>=0;i--){
        nova_frase += frase[i]
    }
    return nova_frase

}

function achar_rep(text,ob){

    let matchgoal = ob.length
    let ref = 0
    let listaf = []
    let tex = ''
    for (let i in text){
        if (Number(i) === ref){
            if (text[i] === ob[0]){
                let ind = Number(i)
                let sl = text.slice(ind,ind+matchgoal)
                if (sl === ob){
                    listaf.push(sl)
                    ref = ind+matchgoal
                    continue
                }
        
            }
            ref += 1
            tex += text[i]
        }
        

    }
    
    return [listaf,tex]

}

function comparar_texto(t1,t2){

    let menor;
    if(t1.length>t2.length){menor = t2,maior = t1}else{menor = t1,maior = t2}
    var dif = Math.abs(t1.length-t2.length)
    menor += ''.repeat(dif)
    
    for (let i in maior){
        
        if(maior[Number(i)]==menor[Number(i)]){
            console.log('V')
        }else{
            console.log("X")
        }
    }
}

function equacao_2grau(a,b,c){

    let baixo = 2*a
    let delta = b*b - 4*a*c
    let x1 = (-b + (delta)**0.5)/baixo
    let x2 = (-b - (delta)**0.5)/baixo

    return [x1,x2]

}

function cod_cesar(texto,pass,tipo=1){
    let alfa = 'abcdefghijklmnopqrstuvwxyz'
    let nov = ''

    if (tipo === 1){

        for (i in texto){
            let alg = texto[i]
            let ind = alfa.indexOf(alg)
            if (!(i === '')){
                let n =ind+pass
                if (n > 25){
                    n -= 26
                }
                nov += alfa[n]
            }
        }
        return nov
    }

    if (tipo === -1){

        for (i in texto){
            let alg = texto[i]
            let ind = alfa.indexOf(alg)
            if (!(i === '')){
                let n =ind-pass
                if (n < 0){
                    n += 26
                }
                nov += alfa[n]
            }
        }
        return nov
        
    }
    
}

function cifra_vignerie(texto,chave,tipo=1){
    let newalfa = ''
    let novotexto = ''
    let alfa = 'abcdefghijklmnopqrstuvwxyz'

    function igualar(){
        if (texto.length > chave.length){
            let dif = texto.length - chave.length
            let ind = 0
            for (let i=0; i< dif;i++){
                chave += chave[ind]
                if (ind%chave.length === 0){
                    ind = 0
                }
                ind += 1
            }
        }
        
    }
    igualar()
    if (tipo === 1){
        

        for (i in texto){
            if (texto[i] === ''){
                novotexto += ''
            }else{
                let letra = chave[i]
                newalfa = alfa.slice(alfa.indexOf(letra),alfa.length) + alfa.slice(0,alfa.indexOf(letra))
                let indlt = alfa.indexOf(texto[Number(i)])
                novotexto += newalfa[indlt]
            }
            
        }

        return novotexto
    }
    if (tipo === -1){
        
        for (i in texto){
            let letra = chave[i]
            newalfa = alfa.slice(alfa.indexOf(letra),alfa.length) + alfa.slice(0,alfa.indexOf(letra))
            let indlt = newalfa.indexOf(texto[Number(i)])
            novotexto += alfa[indlt]
        }

        return novotexto

    }

}

function extenso_reverse(palavra){
    let nova = ''

    for (let i=palavra.length-1;i >= 0;i--){
        nova += palavra[i]
    }

    return nova
}

function extenso_totext(lista,p){

    let text = ''

    for (i of lista){
        text += i
    }

    if (text==='um'){
        text += p[0]
    }else{
        text += p[1]
    }
    return text
}

function extenso_numeroporextenso(num){

    const dics = {
        'unidade':{
            0:'zero',
            1:'um',
            2:'dois',
            3:'três',
            4:'quatro',
            5:'cinco',
            6:'seis',
            7:'sete',
            8:'oito',
            9:'nove'
        },
        'dezena':{
            0:'zero',
            10:'dez',
            11:'onze',
            12:'doze',
            13:'treze',
            14:'quatorze',
            15:'quinze',
            16:'dezeseis',
            17:'dezesete',
            18:'dezoito',
            19:'dezenove',
            2:'vinte',
            3:'trinta',
            4:'quarenta',
            5:'cinquenta',
            6:'sessenta',
            7:'setenta',
            8:'oitenta',
            9:'noventa'
        },
        'centena':{
            1:'cento',
            2:'duzentos',
            3:'trezentos',
            4:'quatrocentos',
            5:'quinhentos',
            6:'seiscentos',
            7:'setecentos',
            8:'oitocentos',
            9:'novecentos'
        }
    }

    let prefs = [[' bilhão ',' bilhões '],[' milhão ',' milhões '],[' mil ',' mil '],['','']]

    let lista = []
    let numtxt = String(num)
    let t = {
    }
    let sr = []
    let extenso = ''
    let cont = 0
    for (let i=numtxt.length-1;i >= 0; i--){
        if (cont === 0){t['unidade'] = numtxt[i] }
        if (cont === 1){t['dezena'] = numtxt[i]}
        if (cont === 2){t['centena'] = numtxt[i]}

        
        if (cont===2 || i === 0){
            
            lista.unshift(t)
            t = {
            }
            cont = 0
        }else{
            cont += 1
        }
        
    }
    
    for (conj of lista){

        let pref = prefs.slice(prefs.length - lista.length,prefs.length)

        for (i in conj){

            if (i === 'unidade'){
                if (conj[i] === '0'){
                    continue
                }
                sr.unshift(
                    dics[i][conj[i]]
                        )
                continue
            }
            if (i === 'dezena'){
                if (conj[i] === '0'){
                    continue
                }

                if (conj[i] === '1'){
                    sr.unshift(
                        dics[i][conj[i]+conj['unidade']]
                    )
                    sr.pop()
                    continue
                }
                if (conj['unidade'] === '0'){
                    sr.unshift(
                    dics[i][conj[i]]
                    )
                    continue
                }
                sr.unshift(
                    dics[i][conj[i]] + ' e '
                )
                
            }
            if (i === 'centena'){
                if (conj[i] === '0'){
                    continue
                }
                if (conj['unidade'] === '0' && conj['dezena'] === '0'){
                    sr.unshift(
                    dics[i][conj[i]]
                    )
                    continue
                }
                sr.unshift(
                    dics[i][conj[i]] + ' e '
                )
            }
            
        }
        extenso += extenso_totext(sr,pref[cont])
        sr = []
        cont += 1
        
    }
    return extenso
}



