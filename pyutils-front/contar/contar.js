
class ContarLPC{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.divmenor = document.createElement("div")
        this.divresp = document.createElement("div")
        this.txt = document.createElement("textarea")
        this.inp = document.createElement("input")
        let h1 = document.createElement("h1")
        let h4 = document.createElement("h4")
        let lab = document.createElement("label")



        //assinando caracteristicas
        {
            this.divmenor.className = 'contardivmenor'
            this.divmaior.className = 'contardivmaior'
            this.divresp.className = 'contarresp'
            this.inp.type = 'number',this.inp.value = '30'
            h1.innerText = 'Contar',h4.innerText = 'palavras,linhas e caracteres de um texto'
            lab.innerText = 'Caracteres por linha'
            this.txt.oninput = function(e){
                t.contar()
            }
            this.inp.oninput = function(e){
                t.contar()
            }
        }

        //assinando hierarquia
        {
            this.divmenor.replaceChildren(this.txt,lab,this.inp)
            this.divmaior.replaceChildren(h1,h4,this.divmenor,this.divresp)
        }
        this.contar()
    }



    contar(){
        let sum_palavra = 0
        let sum_caractere = 0
        let sum_caractere_s = 0
        let sum_linhas = 0
        let estp = 'esc'
        let texto = this.txt.value
        for(let i of texto){
            sum_caractere += 1
            if (sum_caractere % this.inp.value === 0){
                sum_linhas += 1
            }
            if (!([' ','\n'].includes(i))){
                sum_caractere_s += 1
            }
            if (!([' ','\n'].includes(i)) && estp == 'esc'){
                sum_palavra += 1
                estp = 'letra'
            }
            if ([' ','\n'].includes(i) && estp == 'letra'){
                estp = 'esc'
            }
        }
        this.divresp.innerHTML = `linhas: ${sum_linhas}<br>palavras: ${sum_palavra}<br>
        caracteres: ${sum_caractere}<br>(fora espaços: ${sum_caractere_s})`
    }


}

var Contar = new ContarLPC()

function appendcontarlpc(){
    main.replaceChildren(Contar.divmaior)
}