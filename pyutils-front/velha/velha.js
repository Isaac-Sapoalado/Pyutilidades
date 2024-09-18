
var velhavez = 1


function inicio(){
    var conjunto = document.getElementsByName("Velhadivitem")
    var div = document.getElementById("vez")
    div.onclick = ''
    div.innerHTML = 'Vez: player 1'
    velhavez = 1
    for (i=0;i<9;i++){
        conjunto[i].innerHTML = ''
    }


}



function marcar(id){
    var div = document.getElementById(`${id}`)
    var vez_text = document.getElementById("vez")
    if (div.innerHTML === ''){
        if (velhavez === 1){
            div.innerHTML = 'X'
            if (verificar_vitoria()){
                vez_text.innerHTML = 'Vitoria do player 1<br>(Clique aqui para jogar novamente)'
                velhavez = 0
            }else{
                vez_text.innerHTML = 'Vez: player 2'
                velhavez = -1
            }
            
        }else{
            if (velhavez === -1){
                div.innerHTML = 'O'
                if (verificar_vitoria()){
                    vez_text.innerHTML = 'Vitoria do player 2<br>(Clique aqui para jogar novamente)'
                    velhavez = 0
                }else{
                    vez_text.innerHTML = 'Vez: player 1'
                    velhavez = 1
                }
            }
        }
        if (velhavez === 0){
            fim()
        }
    }
}

function fim(){
    var div = document.getElementById("vez")
    div.onclick = function(){
        inicio()
    }
}

function verificar_vitoria(){

    let conjunto = document.getElementsByName("Velhadivitem")
    //conjunto chato de if's
    {
    if (conjunto[2].innerHTML === conjunto[1].innerHTML && conjunto[1].innerHTML === conjunto[0].innerHTML && !(conjunto[0].innerHTML === '')){
        return true

        }
    if (conjunto[6].innerHTML === conjunto[3].innerHTML && conjunto[3].innerHTML === conjunto[0].innerHTML && !(conjunto[0].innerHTML === '')){
        return true
        }
    if (conjunto[8].innerHTML === conjunto[4].innerHTML && conjunto[4].innerHTML === conjunto[0].innerHTML && !(conjunto[0].innerHTML === '')){
        return true
        }
    if (conjunto[2].innerHTML === conjunto[4].innerHTML && conjunto[4].innerHTML === conjunto[6].innerHTML && !(conjunto[6].innerHTML === '')){
        return true
        }
    if (conjunto[1].innerHTML === conjunto[4].innerHTML && conjunto[4].innerHTML === conjunto[7].innerHTML && !(conjunto[7].innerHTML === '')){
        return true
        }
    if (conjunto[3].innerHTML === conjunto[4].innerHTML && conjunto[4].innerHTML === conjunto[5].innerHTML && !(conjunto[5].innerHTML === '')){
        return true
        }
    if (conjunto[8].innerHTML === conjunto[7].innerHTML && conjunto[7].innerHTML === conjunto[6].innerHTML && !(conjunto[6].innerHTML === '')){
        return true
        }
    if (conjunto[2].innerHTML === conjunto[5].innerHTML && conjunto[5].innerHTML === conjunto[8].innerHTML && !(conjunto[8].innerHTML === '')){
        return true
        }
    }
}

class Velha{

    constructor(){

        this.div_maior = document.createElement("div")
        this.divbaixo = document.createElement("div")
        this.linhas = [document.createElement("div"),document.createElement("div"),document.createElement("div")]
        let obs = 0
        let seq = ['Velhaitem','Velhadivmeiov','Velhaitem',
                   'Velhadivmeioh','Velhadivmeio','Velhadivmeioh',
                   'Velhaitem','Velhadivmeiov','Velhaitem'
        ]
        //bloco de div´s da velha
        {   
            for (let item = 1; item <=9; item++){
                let div = document.createElement('div')
                div.id = String('Velha'+item),div.onclick = function(){marcar('Velha'+item)}
                div.setAttribute("name","Velhadivitem"),div.className = seq[item-1]
                this.linhas[obs].appendChild(div)
                if (item % 3 == 0){
                    this.div_maior.appendChild(this.linhas[obs])
                    obs += 1
                }
            }
        }

        //assinar caracteristicas
        {
            this.div_maior.className = 'Velhadiv_maior'
            this.divbaixo.className = 'Velhadiv_vezresult', this.divbaixo.id='vez'
            this.divbaixo.innerHTML = 'Vez: player 1'
            this.linhas[0].className = 'Velhalinha',this.linhas[1].className = 'Velhalinha',this.linhas[2].className = 'Velhalinha'
        }

    }

}

var velha = new Velha()

function appendVelha(){
    main.replaceChildren(velha.div_maior,velha.divbaixo)
}
