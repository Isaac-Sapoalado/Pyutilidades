
const main = document.getElementById("main")
const head = document.getElementById("head")
const BASE_URL = 'https://pyutilidades.onrender.com/'
const BASET_URL = 'http://127.0.0.1:8000/'
function alterar_header(){
    if (sessionStorage.length > 0){
        let d = head.children.item(1)
        d.innerHTML = `<b>Ola, ${sessionStorage.getItem('username')}</b>`
        console.log(d)
    }
}


class Index {

    constructor() {

    //Criando as variaveis
    {   
        var t = this
        this.imgbaseurl = 'static_main/imagens/'
        this.head = document.createElement("header")
        this.div_p = document.createElement("div")
        this.main = document.createElement("main")
    }


    //conjunto tem = nome,funcoes ou seja um conjunto é uma tupla ou lista como:
    //conjunto = [nome,funcs(tal que funcs=[[]])]
    //modulos/funcionalidades
    {   
        this.conjuntos = [
            ['Diversos',[
                [function(){appendcitacao()},'citacoes.png','Citações','Gera citações aleatorias'],
                [function(){apendcalculadora()},'calculadora.png','Calculadora','Calculadora basica'],
                
                [function(){appendtarefa()},'tarefas.png','Gerenciador de tarefas',''],
                
                [function(){appendNumex()},'numex.png','Extenso','Escreva numeros por extenso']
                ]
            ],
            ['Jogos',[
                [function(){appendVelha()},'velha.png','jogo da velha',''],
                [function(){appendforca()},'forca.png','Forca','Jogo da forca'],
            ]],
            ['Codificação',[
                [function(){appendCifradv(1)},'cesar.png','cifra de cesar',''],
                [function(){appendCifradv(2)},'vig.png','cifra de vignerie',''],
                [function(){appendconbase()},'base.png','Conversão de base',''],
                [function(){appendcodbt()},'textobase.png','Codificar Texto','Transforme um texto em binario e mais'],
                [function(){appendRoma()},'romanos.png','Numeros romanos',''],
            ]],
            ['Manipulação de Textos',[
                [function(){appendinvertexto()},'invert.png','Inverter Texto',''],
                [function(){appendcontarlpc()},'conta.png','Contar Texto', 'Contar palavras,linhas e caracteres de um texto'],
                [function(){appendrepterm()},'repte.png','Achar palavra','Encontre palavras em um texto']
            ]],
            ['Matematica',[
                [function(){appendequacao2()},'equacao2.png','Equacão do 2º grau',''],
                [function(){appendConverun()},'convert.png','Conversor de Unidades','']
            ]],
            ['Datas',[
                [function(){appenddatasigno()},'datasigno.png','Dias e signo','veja sua idade em dias,meses,semanas e seu signo']
            ]]
        ]
        this.conjuntos_node = []
    }

    //Colocando id's/classes
    {
        this.head.id = "head"
        this.main.id = "main"
        this.div_p.id = "cont_principal"
    }

    //Inserindo propriedades
    {    
    }

    //Colocando hierarquia
    {
        this.div_p.appendChild(this.main)
    }

    this.build_index()

    }

    build_index(){
        for (let conj of this.conjuntos){
            let conjunto = document.createElement("div")
            let titulo = document.createElement("h3")
            conjunto.className = 'indconjunto',titulo.className = 'inditem'
            titulo.innerHTML = conj[0],conjunto.appendChild(titulo)
            for (let func of conj[1]){
                let cont = document.createElement("div")
                let imag = document.createElement("img")
                let txt = document.createElement("p")

                cont.className = 'inditem',imag.src = this.imgbaseurl + func[1]
                imag.width = '50',imag.height = "50"
                cont.onclick = func[0]
                txt.innerHTML = `<b>${func[2]}</b><br>
                        <span>${func[3]}</span>`
                
                cont.replaceChildren(imag,txt)
                conjunto.appendChild(cont)
                this.conjuntos_node.push(conjunto)
            }
            
        }
    }
}

var indx = new Index()

function appendIndex(){
    main.replaceChildren()
    for (let item of indx.conjuntos_node){
        main.appendChild(item)
    }
    
}
appendIndex()
alterar_header()

