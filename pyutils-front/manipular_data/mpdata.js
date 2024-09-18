
class DataSigno{

    constructor(){

        this.divmaior = document.createElement("div")
        this.sing = document.createElement("h4")
        this.dias = document.createElement("h4")
        this.inp = document.createElement("input")
        let lab = document.createElement("label")
        let h1 = document.createElement("h2")
        let h2 = document.createElement("h2")
        let t = this


        //assinando textos
        {
            h1.innerHTML = 'Sua idade em'
            h2.innerHTML = 'Seu signo é'
            lab.innerHTML = "sua data de nascimento"
        }

        //assinando caracteristicas
        {
            this.inp.type='date',this.inp.value = '2005-01-11'
            this.divmaior.className = 'datasig_divmaior'
            this.inp.oninput = function(e){
                t.calcular_idade()
            }
        }

        this.divmaior.replaceChildren(
            lab,this.inp,h1,this.dias,
            h2,this.sing
            )

    }

    calcular_idade(){
        let data_v = this.inp.value.split('-')
        console.log(data_v[0] === '')
        if (data_v[0] === ''|| data_v[1] === ''|| data_v[2] === ''){
            return
        }
        let ano = -Number(data_v[0]) + new Date().getFullYear()
        let mes = -Number(data_v[1])+1 + new Date().getMonth()
        let dias = -Number(data_v[2]) + new Date().getDate()
    
        let emho = `Em horas:=>${(((ano*365) + (mes*30) + dias)*24).toFixed(2)}<br>`
        let emdias = `Em dias:=>${((ano*365) + (mes*30) + dias).toFixed(2)}<br>`
        let emsem = `Em semanas:=>${(((ano*365) + (mes*30) + dias)/7).toFixed(2)}<br>`
        let emmeses = `Em meses:=>${((ano*12) + mes + (dias/30)).toFixed(2)}<br>`
        let emanos = `Em anos:=>${(ano + (mes/12) + (dias/365)).toFixed(2)}<br>`
    
        this.dias.innerHTML = emho + emdias + emsem + emmeses + emanos
    
        this.sing.innerHTML = this.achar_signo(Number(data_v[2]),Number(data_v[1]))
        
    }


    achar_signo(d,m){
    
        if (m === 3){if(d<21){return "Peixes"}else{return "Aries"}}
        if (m === 4){if(d<20){return "Aries"}else{return "Touro"}}
        if (m === 5){if(d<21){return "Touro"}else{return "Gêmeos"}}
        if (m === 6){if(d<22){return "Gêmeos"}else{return "Câncer"}}
        if (m === 7){if(d<23){return "Câncer"}else{return "Leão"}}
        if (m === 8){if(d<23){return "Leão"}else{return "Virgem"}}
        if (m === 9){if(d<23){return "Virgem"}else{return "Libra"}}
        if (m === 10){if(d<23){return "Libra"}else{return "Escorpião"}}
        if (m === 11){if(d<22){return "Escorpião"}else{return "Sagitário"}}
        if (m === 12){if(d<22){return "Sagitário"}else{return "Capricórnio"}}
        if (m === 1){if(d<20){return "Capricórnio"}else{return "Aquário"}}
        if (m === 2){if(d<19){return "Aquário"}else{return "Peixes"}}
    }


}

let datasigno = new DataSigno()


function appenddatasigno(){
    main.replaceChildren(datasigno.divmaior)
    datasigno.calcular_idade()
}