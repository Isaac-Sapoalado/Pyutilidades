
class NumExtenso{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.h1 = document.createElement("h1")
        this.h3 = document.createElement("h3")
        this.inp = document.createElement("input")
        this.tex = document.createElement("textarea")
        
        //assinando caracteristicas
        {
            this.divmaior.className = 'Numex_divmaior'
            this.inp.type = 'number',this.inp.placeholder = "Escreva aqui",this.inp.oninput = function(e){
                t.extenso_call()
            }
            this.tex.readOnly = true
        }

        //colocando texto
        {
            this.h1.innerText = 'Extenso',this.h3.innerText = 'Escreva qualquer numero entre 999 Bilhões e Zero'
        }

        //hierarquia
        {
            this.divmaior.replaceChildren(
                this.h1,this.h3,this.inp,this.tex
            )
        }
        
        
    }

    extenso_call(){
        let numero = document.querySelector("input")
        let resp = document.querySelector("textarea")
        let num = Number(numero.value)
        if (num >= 0){
            resp.value = this.numeroporextenso(num)
        }else{
            resp.value = `menos ${numeroporextenso(Math.abs(num))}`
        }
      
    }

    numeroporextenso(num){

        let dics = {
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
      
        for (let conj of lista){
      
            let pref = prefs.slice(prefs.length - lista.length,prefs.length)
      
            for (let i in conj){
      
                if (i === 'unidade'){
                    if (conj[i] === '0' && numtxt != conj[i]){
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
            extenso += this.totext(sr,pref[cont])
            sr = []
            cont += 1
      
        }
        return extenso
    }
    
    totext(lista,p){

        let text = ''
      
        for (let i of lista){
            text += i
        }
        if (text===''){
          return text
        }
        if (text==='um'){
            text += p[0]
            return text
        }else{
            text += p[1]
        }
        
        return text
    }

    reverse(palavra){
        let nova = ''
      
        for (let i=palavra.length-1;i >= 0;i--){
            nova += palavra[i]
        }
      
        return nova
    }
      
}

var numext = new NumExtenso()
function appendNumex(){
    main.replaceChildren(numext.divmaior)
}