
class Cifradv{

    constructor(type=1){


        let t = this
        this.alfa = 'abcdefghijklmnopqrstuvwxyz'
        this.divmaior = document.createElement("div")
        this.text = document.createElement("input")
        this.chave = document.createElement("input")
        this.sel = document.createElement("select")
        this.resultado = document.createElement("div")
        let h1 = document.createElement("h1")
        let labtext = document.createElement("label")
        let labch = document.createElement("label")
        let divb = document.createElement("div")
        let b1 = document.createElement("button")
        let b2 = document.createElement("button")
        let tipos = {
                    1:['Cifra de César','number',
                        function(){t.cod_cesar(t.text.value,Number(t.chave.value),1)},
                        function(){t.cod_cesar(t.text.value,Number(t.chave.value),-1)}
                    ],
                    2:['Cifra de vignerie','text',
                        function(){t.cifra_vignerie(t.text.value,t.chave.value,1)},
                        function(){t.cifra_vignerie(t.text.value,t.chave.value,-1)}
                    ]
                }

        //criando hierarquia
        divb.replaceChildren(b1,b2)
        this.divmaior.replaceChildren(
            h1,labtext,this.text,
            labch,this.chave,divb,this.resultado
        )

        //assinando caracteristicas
        this.divmaior.className = 'Cifradivmaior',h1.innerText = tipos[type][0]
        labtext.innerText = 'Texto',labch.innerText = 'chave'
        this.chave.type = tipos[type][1],this.text.type = 'text'
        this.chave.placeholder = 'Escreva a chave',this.text.placeholder = 'Escreva o texto'
        divb.className = 'Cifrabutton',this.resultado.className = 'Cifraresultado'
        //se cesar -> cifrar=cod_cesar(texto,pass,1) e decifrar = cod_cesar(texto,pass,-1)
        //se viger -> cifrar=viginerie(texto,chave,1) e decifrar = viginerie(texto,chave,-1)
        b1.onclick = tipos[type][2],b2.onclick = tipos[type][3]
        b1.innerHTML = 'Cifrar',b2.innerHTML = 'Decifrar'

    }

    removerchar(txt){
        let n = ''
        for (let i in txt){
            if (this.alfa.includes(txt[i])){
                n += txt[i]
            }
        }
        return n
    }

    cod_cesar(texto,pass,tipo=1){
        this.alfa = 'abcdefghijklmnopqrstuvwxyz'
        let nov = ''
        if (tipo === 1){
    
            for (let i in texto){
                let alg = texto[i]
                let ind = this.alfa.indexOf(alg)
                if (!(i === '')){
                    let n =ind+pass
                    if (n > 25){
                        n -= 26
                    }
                    nov += this.alfa[n]
                }
            }
            this.resultado.innerHTML = nov
        }
    
        if (tipo === -1){
    
            for (let i in texto){
                let alg = texto[i]
                let ind = this.alfa.indexOf(alg)
                if (!(i === '')){
                    let n =ind-pass
                    if (n < 0){
                        n += 26
                    }
                    nov += this.alfa[n]
                }
            }
            this.resultado.innerHTML = nov
    
        }
    
    }
    
    cifra_vignerie(texto,chave,tipo=1){
        let newalfa = ''
        let novotexto = ''
        this.alfa = 'abcdefghijklmnopqrstuvwxyz'
        texto = this.removerchar(texto)
    
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
    
    
            for (let i in texto){
                if (texto[i] === ''){
                    novotexto += ''
                }else{
                    let letra = chave[i]
                    newalfa = this.alfa.slice(this.alfa.indexOf(letra),this.alfa.length) + this.alfa.slice(0,this.alfa.indexOf(letra))
                    let indlt = this.alfa.indexOf(texto[Number(i)])
                    novotexto += newalfa[indlt]
                }
    
            }
    
            this.resultado.innerHTML = novotexto
        }
        if (tipo === -1){
    
            for (let i in texto){
                let letra = chave[i]
                newalfa = this.alfa.slice(this.alfa.indexOf(letra),this.alfa.length) + this.alfa.slice(0,this.alfa.indexOf(letra))
                let indlt = newalfa.indexOf(texto[Number(i)])
                novotexto += this.alfa[indlt]
            }
    
            this.resultado.innerHTML = novotexto
    
        }
    
    }

}

var cifradv1 = new Cifradv()
var cifradv2 = new Cifradv(2)

function appendCifradv(nod=1){
    if (nod == 1){
        main.replaceChildren(cifradv1.divmaior)
    }
    if (nod == 2){
        main.replaceChildren(cifradv2.divmaior)
    }
    
}