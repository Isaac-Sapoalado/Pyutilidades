

var texto1 = document.getElementById("texto1")
var texto2 = document.getElementById("texto2")


function comparar_texto(t1,t2){
    document.getElementById("resp2").innerHTML =''
          document.getElementById("resp1").innerHTML  = ''
    let menor;
    let maior;
    if(t1.length>t2.length){menor = [t2,texto2],maior = [t1,texto1]}else{menor = [t1,texto1],maior = [t2,texto2]}
    var dif = Math.abs(t1.length-t2.length)
    menor[0] += ' '.repeat(dif)
    texto1.innerHTML = ''
    texto2.innerHTML = ''
    for (let i in maior[0]){

        if(maior[0][Number(i)]!=menor[0][Number(i)]){
            let spa1 = document.createElement("span")
            let spa2 = document.createElement("span")
            spa1.innerText = maior[0][Number(i)]
            spa2.innerText = menor[0][Number(i)]
            document.getElementById("resp1").appendChild(spa1)
            document.getElementById("resp2").appendChild(spa2)
        }else{
          document.getElementById("resp2").innerHTML += maior[0][Number(i)]
          document.getElementById("resp1").innerHTML += menor[0][Number(i)]
        }
    }

}

function comparar_call(){
    comparar_texto(texto1.innerHTML,texto2.innerHTML)
}