


class Citacoes{

    constructor(){
        
        this.cita = document.createElement("div")
        this.build()
    }

    build(){

        let t = this
        this.cita.className = "conteiner"
        let div = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let btn = document.createElement("button")

        div.className = "card",btn.className = "buttoncard",btn.onclick = function(){t.get()},btn.innerText = "Buscar"
        p1.id = 'cita_texto',p1.className = "textcard",p2.id = 'autor',p2.className = "autor"

        div.replaceChildren(p1,p2)
        this.cita.replaceChildren(btn,div)
    }

    async get(){
        var dado;
        fet = await fetch("https://pyutilidades.onrender.com/api/cita/", {
            mode: 'cors',
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        }
    
        )
        .then(Response => Response.json()).then(data => {
            dado = data
        })
        .catch(error => console.log(error))
        
        this.adicionar(dado)
    
    }
    
    adicionar(lista){
        textcard = document.getElementById('cita_texto')
        autor = document.getElementById('autor')
        textcard.innerText = lista.citacao
        autor.innerText = "autor:" + lista.autor
    }
}

var c = new Citacoes()

function appendcitacao(){
    main.replaceChildren(c.cita)
}