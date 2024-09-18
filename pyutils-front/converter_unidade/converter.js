
class ConverteUn{

  constructor(){


    let t = this
    this.retas = {

      'distancia':[10,['km','hm','dam','m','dm','cm','mm']],
      'massa':[10,['kg','hg','dag','g','dg','cg','mg']],
      'litros':[10,['kl','hl','dal','l','dl','cl','ml']],
      'tempo':[60,['h','m','s']],
      'area':[100,['km','hm','dam','m','dm','cm','mm']],
      'volume':[1000,['km','hm','dam','m','dm','cm','mm']],
      'velocidade':[3.6,['m/s','km/h']],
    }
    this.converter_atual = ''
    this.divmaior = document.createElement("div")
    this.sel1 = document.createElement("select")
    this.sel2 = document.createElement("select")
    this.sel3  =document.createElement("select")
    this.inp1 = document.createElement("input")
    this.inp2 = document.createElement("input")
    let h1 = document.createElement("h1")
    let ls = document.createElement("label")
    let divmenor = document.createElement("div")
    let divin1 = document.createElement("div")
    let divin2 = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let op1 = document.createElement("option")
    let op2 = document.createElement("option")
    let op3 = document.createElement("option")
    let op4 = document.createElement("option")
    let op5 = document.createElement("option")
    let op6 = document.createElement("option")
    let op7 = document.createElement("option")
    let func = function(e){
      t.inp2.value = t.converter_basico(t.sel2.value,t.sel3.value,t.inp1.value,t.sel1.value)
    }


    //assinando caracteristicas
    {
      this.divmaior.className = 'convertundivmaior'
      h1.innerText = 'Conversor de unidades',ls.innerText = 'Unidades'
      this.sel1.onclick = function(){t.converter_init(t.sel1.value)}
      op1.value = 'distancia',op1.innerHTML = 'distância',op1.selected = true
      op2.value = 'massa',op2.innerHTML = 'massa'
      op3.value = 'litros',op3.innerHTML = 'litros'
      op4.value = 'tempo',op4.innerHTML = 'tempo'
      op5.value = 'area',op5.innerHTML = 'área'
      op6.value = 'volume',op6.innerHTML = 'volume'
      op7.value = 'velocidade',op7.innerHTML = 'velocidade'
      divmenor.className = 'convertundivmenor'
      p1.innerText = 'De:',p2.innerText = 'Para:'
      this.inp1.value = 0,this.inp2.value = 0
      this.inp1.type = 'number'
      this.inp2.type = 'text',this.inp2.readOnly = true
      this.inp1.oninput = func,this.sel2.onchange = func,this.sel3.onchange = func
      this.sel1.onchange = func
    }

    //fazendo hierarquia
    {
      this.sel1.replaceChildren(
        op1,op2,op3,op4,op5,op6,op7
      )
      divin1.replaceChildren(p1,this.sel2,this.inp1)
      divin2.replaceChildren(p2,this.sel3,this.inp2)
      divmenor.replaceChildren(divin1,divin2)
      this.divmaior.replaceChildren(h1,ls,this.sel1,divmenor)
    }

  }


  converter_organizar(medida){

    if (!(this.converter_atual === medida)){
      this.sel2.replaceChildren([])
      this.sel3.replaceChildren([])
      let reta = this.retas[medida][1]
      for (let i of reta){
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.value = i
        option1.innerText = i
        option2.value = i
        option2.innerText = i
        this.sel2.appendChild(option1)
        this.sel3.appendChild(option2)
      }
    }
    
    
  }
  
  converter_init(x){
    if (!(x === this.converter_atual)){
      this.converter_organizar(x)
      this.converter_atual = x
    }
  }
  
  
  converter_basico(from,to,num,type){
  
    let reta = this.retas[type][1]
    let fator = this.retas[type][0]
    var dif = reta.indexOf(to) - reta.indexOf(from)
  
  
    return (num * (fator**dif))
  }

}



var ConvUn = new ConverteUn()

function appendConverun(){
  main.replaceChildren(ConvUn.divmaior)
  ConvUn.converter_init("distancia")
}