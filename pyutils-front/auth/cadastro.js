
async function cadastro(){
    r = await fetch(
        BASE_URL+"auth/cadastro/",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':document.getElementById("nome").value,
                'email':document.getElementById("email").value,
                'password':document.getElementById("senha").value
            })
        }).then(response => response.json()).then(dado => {return dado})
        login()
}

async function login(){
    r = await fetch(
        BASE_URL+"auth/login/",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':document.getElementById("nome").value,
                'password':document.getElementById("senha").value
            })
        }).then(response => response.json()).then(dado => {return dado})

    sessionStorage.setItem('username',r.user.username)
    sessionStorage.setItem('pk',r.user.pk)
    sessionStorage.setItem('token',('Token ' + r.access_token))
    alterar_header()
    appendIndex()
    
}

class Cadastro{

    constructor(){

        this.foco = "cadastro"
        this.divp = document.createElement("div")
        this.divsegment = document.createElement("div")
        this.divcad = document.createElement("div")
        this.divlog = document.createElement("div")
        this.divcad.id = "cadform"
        this.divlog.id = "cadform"
        this.cadastro_build()
        this.login_build()
        this.segment_build()

        this.divp.id = "cadmain"

        this.divp.replaceChildren(this.divsegment,this.divcad)
    }

    cadastro_build(){
        let d = {
            'text':'nome',
            'email':'email',
            'password':'senha'
        }
        let btn = document.createElement("button")
        btn.onclick = function(){cadastro()},btn.innerText = "Cadastrar"

        for (let i in d){
            let lab = document.createElement("label")
            let inp = document.createElement("input")
            let br = document.createElement("br")

            inp.type = i,inp.id = d[i]
            lab.innerText = d[i]
            this.divcad.appendChild(lab)
            this.divcad.appendChild(inp)
            this.divcad.appendChild(br)
        }
        this.divcad.appendChild(btn)

    }

    login_build(){
        let d = {
            'text':'nome',
            'password':'senha'
        }
        let btn = document.createElement("button")
        btn.onclick = function(){login()},btn.innerText = "Login"

        for (let i in d){
            let lab = document.createElement("label")
            let inp = document.createElement("input")
            let br = document.createElement("br")

            inp.type = i,inp.id = d[i]
            lab.innerText = d[i]
            this.divlog.appendChild(lab)
            this.divlog.appendChild(inp)
            this.divlog.appendChild(br)
        }
        this.divlog.appendChild(btn)

    }

    segment_build(){
        let t = this
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")

        this.divsegment.className = "cadsegment_div"
        btn1.className = "cadsegment_button",btn1.id = "cadastro",btn1.onclick = function(){t.alternar('cadastro')},btn1.innerText = 'Cadastro'
        btn2.className = "cadsegment_button",btn2.id = "login",btn2.onclick = function(){t.alternar('login')},btn2.innerText = 'Login'

        this.divsegment.replaceChildren(btn1,btn2)
    }

    alternar(id){

        if(id === 'cadastro'){
            this.divp.removeChild(this.divlog)
            this.divp.appendChild(this.divcad)
        }
        if(id === "login"){
            this.divp.removeChild(this.divcad)
            this.divp.appendChild(this.divlog)
        }
        this.trocar_foco(id)
    }

    trocar_foco(id){
        if (this.foco != id){
            this.foco = id
            var b = document.getElementById(id)
            var d = document.getElementsByClassName("cadsegment_button")
            for (let i=0;i<d.length; i++){
                d[i].style.backgroundColor = "rgb(27, 27, 27)";
                d[i].style.borderBottom ="none";
            }
            b.style.backgroundColor = "rgb(20, 20, 20)"
            b.style.borderBottom ="1px solid rgb(270, 270, 270)"
        }
    }   
}

var cad = new Cadastro()

function appendcad(){
    main.replaceChildren(cad.divp)
}
