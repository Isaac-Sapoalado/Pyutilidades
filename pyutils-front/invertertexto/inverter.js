
class InverterTxt{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.txt1 = document.createElement("textarea")
        this.txt2 = document.createElement("textarea")
        let h1 = document.createElement("h1")
        let divmenor = document.createElement("div")


        //assinando caracteristicas
        {
            this.txt2.readOnly = true,this.divmaior.className = 'invdivmaior'
            h1.innerText = 'Inverter Texto',this.txt1.oninput = function(e){t.inverter_texto()}
        }

        //assinando hierarquia
        {
            divmenor.replaceChildren(this.txt1,this.txt2)
            this.divmaior.replaceChildren(h1,divmenor)
        }

    }


    inverter_texto(){

        let frase = this.txt1.value
        let nova_frase = ''
        for (let i=frase.length-1;i>=0;i--){
            nova_frase += frase[i]
        }
        this.txt2.value = nova_frase
    }
}


var invertertexto = new InverterTxt()

function appendinvertexto(){
    console.log(invertertexto)
    main.replaceChildren(invertertexto.divmaior)
}

