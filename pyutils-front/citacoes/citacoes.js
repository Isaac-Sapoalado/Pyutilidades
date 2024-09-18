


class Citacoes{

    constructor(){
        
        this.cita = document.createElement("div")
        this.build()
    }

    build(){

        this.cita.className = "conteiner"
        let div = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let btn = document.createElement("button")

        div.className = "card",btn.className = "buttoncard",btn.onclick = function(){get()},btn.innerText = "Buscar"
        p1.id = 'cita_texto',p1.className = "textcard",p2.id = 'autor',p2.className = "autor"

        div.replaceChildren(p1,p2)
        this.cita.replaceChildren(btn,div)
    }
}

var c = new Citacoes()

function appendcitacao(){
    main.replaceChildren(c.cita)
}