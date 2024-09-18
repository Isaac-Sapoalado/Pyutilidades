

var palavra = ''
var outpalavra = ''
var dicas = []
var tentativas = 5

async function pegar_palavra(){
    response = await fetch(
        "https://pyutilidades.onrender.com/api/palavra/",{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json()).then(d => {return d})
        .catch(error => console.log(error))
    
        palavra = response.palavra
        dicas = response.dicas

    comecar()
        
}

function comecar(){
    gerar_linhas()
}

function dica(){
    var div = document.getElementById("dicadiv")
    var tent = document.getElementById("tentativas")
    if (tentativas >= 1){
        if (dicas.length > 0){
            div.innerHTML = 'dicas:' + dicas.pop()
            tentativas -= 1
            tent.innerHTML = tentativas
        }else{
            div.innerHTML = "dicas foram esgotadas"
        }
            
    }else{
        div.innerHTML = "tentativas insuficientes"
    }
}
function gerar_linhas(){

    var tent = document.getElementById("tentativas")
    var btnd = document.getElementById('dicabtn')
    var tab = document.getElementById("tabela")
    tab.replaceChildren([])
    var tr = document.createElement("tr")
    var inp = document.getElementById("chute")
    var btn = document.getElementById("chutebtn")
    tentativas = 5
    tent.innerHTML = tentativas
    inp.readOnly = false
    inp.value = ''
    btnd.hidden = false
    btn.innerHTML = 'chute',btn.onclick = function(){chutar()}

    for (i in palavra){

        tr.appendChild(gerar_letra(id=i))
        if ((Number(i) + 1)%10 === 0){
            tab.appendChild(tr)
            tr = document.createElement("tr")
        }
    }
    tab.appendChild(tr)
}
function gerar_letra(id){

    var td = document.createElement("td")
    var div = document.createElement("div")

    div.id = id,div.className ="div_menor"
    td.appendChild(div)
    return td

}
function chutar(){
    var p = document.getElementById("chute")
    var text = p.value.toLowerCase()
    var acerto = false
    p.value = ''
    for (i in palavra){
        if (text === palavra[i].toLowerCase()){
            var div = document.getElementById(i)
            div.innerHTML = palavra[i]
            acerto = true
        }
    }
    verificar_acerto()
    if (!(acerto)){
        var tent = document.getElementById("tentativas")
        var num = Number(tent.innerText)
        if (num > 0){
            tent.innerHTML = num-1
            tentativas -= 1
        }else{
            var inp = document.getElementById("chute")
            var btn = document.getElementById("chutebtn")
            inp.readOnly = true
            inp.value = `Você perdeu, a palavra correta é:\n(${palavra})`
            btn.innerHTML = 'Jogar novamente',btn.onclick = function(){pegar_palavra()}
        }
    }
}

function verificar_acerto(){

    for (i in palavra){
        var div = document.getElementById(`${i}`)
        outpalavra += div.innerHTML
    }
    if (outpalavra === palavra){
        var btnd = document.getElementById('dicabtn')
        var inp = document.getElementById("chute")
        var btn = document.getElementById("chutebtn")
        inp.readOnly = true
        inp.value = `Você venceu, a palavra correta é:\n(${palavra})`
        btnd.hidden = true
        btn.innerHTML = 'Jogar novamente',btn.onclick = function(){pegar_palavra()}
    }else{
        outpalavra = ''
    }
}

class Forca{
    
    constructor(){

        this.forca = document.createElement("div")
        this.div1 = document.createElement("div")
        this.div2 = document.createElement("div")
        this.build_div1()
        this.build_div2()
        this.forca.replaceChildren(this.div1,this.div2)
    }

    build_div1(){
        this.div1.id ='div_maior',this.div1.className = 'div_maior'
        let top = document.createElement("div")
        let dicadiv = document.createElement("div")
        let tentadiv = document.createElement("div")
        let tabeladiv = document.createElement("div")
        let tabela = document.createElement("table")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")

        top.className = "top",dicadiv.id="dicadiv",tentadiv.className = 'tentativa'
        tabeladiv.className = "tabled",tabela.id = "tabela",p2.id = "tentativas"

        p1.innerText = "tentativas:",p2.innerText ="5"

        tentadiv.replaceChildren(p1,p2)
        top.replaceChildren(dicadiv,tentadiv)
        tabeladiv.appendChild(tabela)
        this.div1.replaceChildren(top,tabeladiv)
    }

    build_div2(){
        this.div2.className = "div_chute"
        let inp = document.createElement("input")
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")

        inp.type = "text",inp.maxLength = 1,inp.className = "text_chute",inp.id = "chute"
        btn1.onclick = function(){dica()},btn1.id = "dicabtn",btn1.innerText = "Dica"
        btn2.onclick = function(){chutar()},btn2.id = "chutebtn",btn2.innerText = "Chutar"

        this.div2.replaceChildren(inp,btn1,btn2)
    }
}

var f = new Forca()

function appendforca(){
    main.replaceChildren(f.forca)
    pegar_palavra()
}
