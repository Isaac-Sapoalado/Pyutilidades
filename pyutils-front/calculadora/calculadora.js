
function calculadora(x){
    var txt = document.getElementById("calc_label")
    switch (x) {
        case "AC":
            
            txt.innerText = ""
            break;
        case "=":
            try {
                txt.innerText = eval(calcular(txt.textContent))
            } catch (error) {
                console.log("tem que ser muito burro mermo.")
            }
            

            break;
    
        default:
                txt.innerText = txt.textContent+x
            break;
    }

}
function calcular(equ){
    new_equ = ""
    for (i in equ){
        if (equ[i] === "÷" || equ[i] === "×"){
            new_equ += formatar(equ[i])
            continue
        }
        new_equ += equ[i]

    }
    return new_equ
}
function percorrer(palavra){
    letra = ""
    for (i in palavra){
        letra = palavra[i]
    }
    return letra
}
function formatar(x){
    switch (x) {
        case "÷":
            return "/"
            break;
        
        case "×":
            return "*"
        default:

            break;
    }
}

class Calculadora{

    constructor(){
        this.calculadora = document.createElement("div")
        this.div1 = document.createElement("div")
        this.div2 = document.createElement("div")
        this.carac = [
            ["(",")","%","AC"],
            ["7","8","9","÷"],
            ["4","5","6","×"],
            ["1","2","3","-"],
            ["0",".","=","+"]
        ]
        this.build_div1()
        this.build_div2()
        this.calculadora.replaceChildren(this.div1,this.div2)
    }
    build_div1(){
        let t = document.createElement("textarea")
        t.maxLength = 5
        t.id = "calc_label"
        t.readOnly = true
        this.div1.appendChild(t)

    }
    
    build_div2(){
        this.div2.className = "grid_calculadora"
        for (let row of this.carac){
            
            for (let item of row){
                var linha = document.createElement("div")
                linha.id = item
                linha.onclick = function (){
                    calculadora(item)
                }
                linha.className = "item_calculadora"
                linha.innerText = item
                this.div2.appendChild(linha)
            }
        }
    }
}



let r = new Calculadora()
function apendcalculadora(){
    main.replaceChildren(r.calculadora)
}