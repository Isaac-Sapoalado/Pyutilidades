
var tarefa_foco;
async function tarefa_post(texto,conc){
    await fetch(
        "http://127.0.0.1:8000/api/tarefa/",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'tarefa':texto,
                'feito':conc
            })
        }
    
        )
        .catch(error => console.log(error))
}

async function tarefa_put(texto,conc,pk){
    await fetch(
        "http://127.0.0.1:8000/api/tarefa/"+pk,{
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'tarefa':texto,
                'feito':conc
            })
        }
    
        )
        .catch(error => console.log(error))
}

async function tarefa_del(pk){
    await fetch(
        "http://127.0.0.1:8000/api/tarefa/"+pk,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            }
        }
    
        )
        .catch(error => console.log(error))
}


async function tarefa_get() {
    var recebe;
    var v = await fetch(
    "http://127.0.0.1:8000/api/tarefa/",{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        }
    }

    )
    .then(Response => Response.json()).then(data => {
        recebe = data
    })
    .catch(error => console.log(error))
    
    for (i in recebe){
        obj = [
            recebe[i].tarefa,
            recebe[i].feito,
            recebe[i].pk
            ]
        tarefa_adcionar(obj)

    }
}

function tarefa_adcionar(objec=false){
    var conteiner = document.getElementById("div_tarefa")
    if (objec === false){
        var texto = document.getElementById("txt_area")
        
        var txt = texto.value
        if (txt != ""){
            tarefa_gerar_linha(txt,conteiner,false,novo=true)
            texto.value = ""
            }
        
    }else{
        tarefa_gerar_linha(seq=obj[0],chave=obj[2],bol=obj[1])
    }
    
    

}

function tarefa_gerar_linha(seq,chave,bol,novo=false){
    //inicializado variaveis importantes
    {
    var container = document.getElementById("div_tarefa")
    var img1 = document.createElement("img")
    var img2 = document.createElement("img")
    var box = document.createElement("input")
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    var div3 = document.createElement("div")

    div3.className = "divlinha",div3.id=chave
    }
    //configurando icones
    {
    img1.src = "tarefas/static/tarefa_editar.png"
    img1.width,img1.height = 30
    img1.onclick = function (){
        tarefa_editar(div3.id)
    }
    img2.src = "tarefas/static/lixeira.png"
    img2.width,img2.height = 30
    img2.onclick = function (){
        tarefa_deletar(div3.id)
    }
    }
    
    box.type = "checkbox",box.name = String('box' + div3.id),box.checked = bol
    box.onclick = function(){
        tarefa_editar(div3.id,box.checked)
    }
    div1.append(seq)
    div2.appendChild(img1),div2.appendChild(img2),div2.appendChild(box)
    div3.appendChild(div1),div3.appendChild(div2)
    container.appendChild(div3)
    tarefa_filtrar()
    if (novo){
        post(texto=seq,conc=bol)
    }
    

}

function tarefa_editar(id,checke=null) {

    var div = document.getElementById(id)
    var text = String(div.firstChild.innerHTML)
    if (checke != null){

        
        put(text,checke,id)

    }else{
        var texto = prompt("novo texto")
        var caixa = document.getElementsByName("box"+id)
        caixa = caixa[0].checked
        if (texto != "" && texto != text){
            var conteiner = document.getElementById("div_tarefa")
            div.children.item(0).innerHTML = texto
            put(texto,caixa,id)
        }
    }
    tarefa_filtrar()

}

function tarefa_deletar(id){
    var conteiner = document.getElementById("div_tarefa")
    var div = document.getElementById(id)
    conteiner.removeChild(div)
    del(pk=id)
}


///nao mexer
function tarefa_trocar_foco(id){
    if (tarefa_foco != id){
        tarefa_foco = id
    }
    var b = document.getElementById(id)
    var d = document.getElementsByClassName("segment_button")
    for (i=0;i<d.length; i++){
        d[i].style.backgroundColor = "rgb(27, 27, 27)";
        d[i].style.borderBottom ="none";
    }
    b.style.backgroundColor = "rgb(20, 20, 20)"
    b.style.borderBottom ="1px solid rgb(270, 270, 270)"
    tarefa_filtrar()
}

function tarefa_filtrar(){
    
    var conteiner = document.getElementsByClassName("divlinha")
    for (i=0;i<conteiner.length; i++){
        var div = conteiner.item(i)
        box = div.children[1].children[2].checked
        div.style.display = "flex"
        if (tarefa_foco === "em_andamento" && box==true){
            div.style.display = "none"
        }
        if (tarefa_foco === "concluido" && box==false){
            div.style.display = "none"
        }
    }
}

class Tarefa{
    
    constructor(){
        this.tarefa = document.createElement("div")
        this.div1;
        this.div2;
        this.build_div1()
        this.build_div2()
        this.tarefa.replaceChildren(this.div1,this.div2)
    }

    build_div1(){
        let cont = document.createElement("div")
        let t = document.createElement("textarea")
        let btn = document.createElement("button")
        cont.className = "divtexto"
        t.id ="txt_area"
        btn.className = "button_tarefa"
        btn.innerText = "+"
        btn.onclick = function(){
            tarefa_adcionar()
        }

        cont.replaceChildren(t,btn)
        this.div1 = cont
    }
    build_div2(){
        let cont_tarefa = document.createElement("div")
        let cont_segment = document.createElement("div")
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")
        let btn3 = document.createElement("button")
        cont_tarefa.id = 'div_tarefa'
        cont_tarefa.className = "divtarefa"
        cont_segment.className = "segment_div"
        btn1.className = "segment_button",btn1.id = "todos",btn1.onclick = function(){tarefa_trocar_foco('todos')},btn1.innerText = 'todos'
        btn2.className = "segment_button",btn2.id = "em_andamento",btn2.onclick = function(){tarefa_trocar_foco('em_andamento')},btn2.innerText = 'em andamento'
        btn3.className = "segment_button",btn3.id = "concluido",btn3.onclick = function(){tarefa_trocar_foco('concluido')},btn3.innerText = 'concluido'

        cont_segment.replaceChildren(btn1,btn2,btn3)
        cont_tarefa.appendChild(cont_segment)
        this.div2 = cont_tarefa
    }
}

let t = new Tarefa()

function appendtarefa(){
    main.replaceChildren(t.tarefa)
    get()
}
