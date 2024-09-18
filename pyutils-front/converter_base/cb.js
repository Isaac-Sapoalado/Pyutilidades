

class ConverterBase{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.h1 = document.createElement("h1")
        this.lab1 = document.createElement("label")
        this.lab2 = document.createElement("label")
        this.lab3 = document.createElement("label")
        this.lab4 = document.createElement("label")
        this.num1 = document.createElement("input")
        this.num2 = document.createElement("input")
        this.num3 = document.createElement("input")
        this.num4 = document.createElement("input")
        this.inps = [[this.num1,this.num2,this.num3,this.num4],['','','','']]


        //assinando caracteristicas
        {
            this.divmaior.className = 'Cb1divmaior',this.h1.innerText = 'Conversão de base numerica'
            this.lab1.innerText = ' decimal ',this.lab2.innerText = ' binario '
            this.lab3.innerText = ' octal ',this.lab4.innerText = ' hexadecimal '
            this.num1.id = 'Cbdecimal',this.num2.id = 'Cbbinario'
            this.num3.id = 'Cboctal'
            this.num4.id = 'Cbhexadecimal'
            this.num1.oninput = function(e){
                if (!(isNaN(e.data) || e.data==' ')){
                    if (!(e.data == null)){
                        t.inps[1][0] += e.data
                        
                    }else{
                        t.inps[1][0] = t.num1.value
                    }
                    t.atribuir(t.num1)
                }else{
                    t.num1.value = t.inps[1][0]
                }
            }
            this.num2.oninput = function(e){
                if (!(isNaN(e.data) || e.data==' ') && Math.abs(Number(e.data)<=1)){
                    
                    if (!(e.data == null)){
                        t.inps[1][1] += e.data
                        console.log(t.inps[1][1] + e.data)
                    }else{
                        t.inps[1][1] = t.num2.value
                    }
                    t.atribuir(t.num2)
                }else{
                    t.num2.value = t.inps[1][1]
                }
            }
            this.num3.oninput = function(e){
                if (!(isNaN(e.data) || e.data==' ') && Math.abs(Number(e.data)<8)){
                    if (!(e.data == null)){
                        t.inps[1][2] += e.data
                    }else{
                        t.inps[1][2] = t.num3.value
                    }
                    t.atribuir(t.num3)
                }else{
                    t.num3.value = t.inps[1][2]
                }
            }
            this.num4.oninput = function(e){
                let rep = ['a','b','c','d','e','f']
                if (!(isNaN(e.data) || e.data==' ') || rep.includes(e.data.toLowerCase())){
                    if (!(e.data == null)){
                        t.inps[1][3] += e.data.toLowerCase()
                        t.num4.value = t.inps[1][3]
                    }else{
                        t.inps[1][3] = t.num4.value
                    }
                    t.atribuir(t.num4)
                }else{
                    t.num4.value = t.inps[1][3]
                }
            }
        }

        //assinando hierarquia
        {
            this.divmaior.replaceChildren(
                this.h1,this.lab1,this.num1,this.lab2,this.num2,
                this.lab3,this.num3,this.lab4,this.num4
            )
        }
    }


    remove(str,sub){
        let newstr = ''
        for (let i in str){
            if (str[i] != sub){
                newstr += str[i]
            }
        }
        return newstr
    }
    
    atribuir(caller){
        let cb_d = this.binario(caller.value,-1,caller.id.slice(2,20))
        for (let i of this.inps[0]){
            if (i != caller){
                let resp = this.binario(cb_d,1,i.id.slice(2,20))
                i.value = resp
                this.inps[1][this.inps[0].indexOf(i)] = resp
            }
            
        }
    }
    
    
    reverter(txt) {
    
        let novo = ''
        for (let i = txt.length - 1; i >= 0; i--) {
            novo += txt[i]
        }
    
    
        return novo
    
    }
    
    
    binario(num, tipo = 1, base = 'decimal') {
    
        let bases = {
            'binario': 2,
            'decimal': 10,
            'octal': 8,
            'hexadecimal': 16
        }
    
        let rep = {
            10: 'a',
            11: 'b',
            12: 'c',
            13: 'd',
            14: 'e',
            15: 'f'
        }
    
        let base_atual = bases[base]
        let on = true
        let quo = num
        let resto = 0
        let bin = ''
    
        if (tipo === 1) {
    
            while (on) {
    
                resto = quo % base_atual
                quo = Math.trunc(quo / base_atual)
                if (resto > 9) {
                    resto = rep[resto]
                }
                bin += String(resto)
                if (quo in [1,0]) {
                    if (quo === 1) {
                        bin += String(quo)
                    }
                    on = false
                }
    
            }
            bin = this.reverter(bin)
            return bin
        }
    
        if (tipo === -1) {
    
            let newnum = 0
            bin = this.reverter(String(num))
            for (let i = 0; i < bin.length; i++) {
                if (isNaN(bin[i])) {
                    for (let it in rep) {
                        if (rep[it] == bin[i]) {
                            newnum += Number(it) * 16 ** i
                        }
                    }
                    continue
    
                }
                newnum += Number(bin[i]) * base_atual ** i
            }
    
    
            return newnum
    
        }
    
    }

}
var Conbase = new ConverterBase()


function appendconbase(){
    main.replaceChildren(Conbase.divmaior)
}

