
class RomanosEm{

    constructor(){

        let t = this
        this.dict = {
            1:'I',
            5:'V',
            10:'X',
            50:'L',
            100:'C',
            500:'D',
            1000:'M'
        }
        this.divmaior = document.createElement("div")
        this.inp1 = document.createElement("input")
        this.inp2 = document.createElement("input")
        this.btn1 = document.createElement("button")
        this.btn2 = document.createElement("button")
        let h1 = document.createElement("h1")
        let lab1 = document.createElement("label")
        let lab2 = document.createElement("label")
        let dv1 = document.createElement("div")
        let dv2 = document.createElement("div")
        

        //asssinando caracteristicas
        {
            this.divmaior.className = 'romadivmaior'
            this.btn1.onclick = function(e){
                t.inp2.value = t.emroma(t.inp1.value,-1)
            }
            this.btn2.onclick = function(e){
                t.inp1.value = t.emroma(t.inp2.value,1)
            }
            this.btn1.className = 'indbtnp',this.btn2.className = 'indbtnp'
            this.btn1.innerText = 'Converter',this.btn2.innerText = 'Converter'
            h1.innerText = 'Numeros Romanos',lab1.innerText = 'Numero decimal',lab2.innerText = 'Numero Romano'
        }

        //assinando hierarquia
        {
            dv1.replaceChildren(this.inp1,this.btn1)
            dv2.replaceChildren(this.inp2,this.btn2)
            this.divmaior.replaceChildren(h1,lab1,dv1,lab2,dv2)
        }

    }


    achar(x,t=1){
        if (t===1){
            for (i in this.dict){
                if (this.dict[i] == x){
                    return Number(i)
                }
            }
            return 0
        }
        if (tipo == -1){
            for (i in this.dict){
                if (i == x){
                    return this.dict[i]
                }
            }
            return ''
        }
        
    }
    
    emroma(num,tipo=1){
    
        let array = []
        let casas = {}
        if (tipo === 1){
            let dec = 0
            for (i of num){
                array.push(this.achar(i.toUpperCase()))
            }
            let re = array.reduce((dec,i,ind)=>{
            if (ind < array.length-1){
                if (i >= array[ind+1]){
                    return dec += i
                }else{
                    return dec += i * -1
                }
            }
            dec += i
            return dec
            },0)
    
            return re
        }
        if (tipo === -1){
            let resp = ''
            for (let i=0;i<=2;i++){
                if (i === 0){casas['centena'] = num[i] }
                if (i === 1){casas['dezena'] = num[i]}
                if (i === 2){casas['unidade'] = num[i]}
            }
            for (let item in casas){
                let num = Number(casas[item])
                console.log(item)
                if (item === 'centena'){
                    if (num <= 3){
                        resp += this.dict[100].repeat(num)
                    }
                    if (num === 4){
                        resp += this.dict[100] + this.dict[500]
                    }
                    if (num === 5){
                        resp += this.dict[500]
                    }
                    if (num <= 8 && num >= 6){
                        resp += this.dict[500] + this.dict[100].repeat(num-5)
                    }
                    if (num ===9){
                        resp += this.dict[100] + this.dict[1000]
                    }
                }
                if (item === 'dezena'){
                    if (num <= 3){
                        resp += this.dict[10].repeat(num)
                    }
                    if (num === 4){
                        resp += this.dict[10] + this.dict[50]
                    }
                    if (num === 5){
                        resp += this.dict[50]
                    }
                    if (num <= 8 && num >= 6){
                        resp += this.dict[50] + this.dict[10].repeat(num-5)
                    }
                    if (num ===9){
                        resp += this.dict[10] + this.dict[100]
                    }
                }
                if (item === 'unidade'){
                    if (num <= 3){
                        resp += this.dict[1].repeat(num)
                    }
                    if (num === 4){
                        resp += this.dict[1] + this.dict[5]
                    }
                    if (num === 5){
                        resp += this.dict[5]
                    }
                    if (num <= 8 && num >= 6){
                        resp += this.dict[5] + this.dict[1].repeat(num-5)
                    }
                    if (num ===9){
                        resp += this.dict[1] + this.dict[10]
                    }
                }
            }
            return resp
        }
    
    }

}


var Romaem = new RomanosEm()


function appendRoma(){
    main.replaceChildren(Romaem.divmaior)
}



