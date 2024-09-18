



class Repeterm{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.inp = document.createElement("input")
        this.txt = document.createElement("textarea")
        this.result = document.createElement("div")
        let h1 = document.createElement("h1")
        let l = document.createElement("label")
        let btn = document.createElement("button")

        //assinando caracteristicas
        {
            this.divmaior.className = 'repdivmaior',this.result.className = 'repeteresultado'
            this.txt.placeholder = 'coloque o texto aqui',this.txt.className = 'repetetexto'
            h1.innerText = 'Achar termo',l.innerText = 'Palavra'
            btn.onclick = function(){
                t.achar_rep(t.txt.value,t.inp.value)
            }
            btn.innerText = 'Achar',btn.className = 'indbtnp'
        }

        //assinando hierarquia
        {
            this.divmaior.replaceChildren(h1,l,this.inp,btn,this.txt,this.result)
        }

    }

    achar_rep(text,ob){
        this.result.innerHTML = ""
        let matchgoal = ob.length
        let ref = 0
        let listaf = []
        for (let i in text){
            if (Number(i) === ref){
                if (text[i].toLowerCase() === ob[0].toLowerCase()){
                    let ind = Number(i)
                    let sl = text.slice(ind,ind+matchgoal)
                    if (sl.toLowerCase() === ob.toLowerCase()){
                        let spa = document.createElement("span")
                        spa.innerText = sl,spa.style.color = 'red'
                        this.result.appendChild(spa)
                        ref = ind+matchgoal
                        continue
                    }
                }
                ref += 1
                this.result.innerHTML += text[i]
            }
        }
    }

}


var Repter = new Repeterm()

function appendrepterm(){
    main.replaceChildren(Repter.divmaior)
}