


class Equacao2{

  constructor(){

    let t= this
    this.divmaior = document.createElement("div")
    this.numa = document.createElement("input")
    this.numb = document.createElement("input")
    this.numc = document.createElement("input")
    this.x1 = document.createElement("input")
    this.x2 = document.createElement("input")
    let h1 = document.createElement("h1")
    let l1 = document.createElement("label")
    let l2 = document.createElement("label")
    let l3 = document.createElement("label")
    let lx1 = document.createElement("label")
    let lx2 = document.createElement("label")
    let btn = document.createElement("button")
    let divm = document.createElement("div")



    //assinando caracteristicas
    {
      h1.innerText = 'Equação 2º Grau',this.divmaior.className = 'grau2divmaior'
      l1.innerText = 'a:',l2.innerText = 'b:',l3.innerText = 'c:'
      lx1.innerText = 'x1',lx2.innerText = 'x2'
      this.x1.readOnly = true,this.x2.readOnly = true
      this.numa.type = 'number',this.numb.type = 'number',this.numc.type = 'number'
      btn.innerHTML = 'Calcular',btn.onclick = function(){t.equacao2_call()}
      btn.className = 'indbtnp'
    }

    //assinando hierarquia
    {
      divm.replaceChildren(l1,this.numa,l2,this.numb,l3,this.numc)
      this.divmaior.replaceChildren(
        h1,divm,btn,lx1,this.x1,lx2,this.x2
      )
    }
  }

  equacao_2grau(a,b,c){
  
    let baixo = 2*a
    let delta = (b*b) - (4*a*c)
    let x1 = (-b + (delta)**0.5)/baixo
    let x2 = (-b - (delta)**0.5)/baixo
    if (isNaN(x1)){
      x1 = "raiz não real(imaginaria)"
    }
    if (isNaN(x2)){
      x2 = "raiz não real(imaginaria)"
    }
    return [x1,x2]

  }


equacao2_call(){

    let result = equacao_2grau(
      Number(this.numa.value),
      Number(this.numb.value),
      Number(this.numc.value))
    this.x1.value = result[0]
    this.x2.value = result[1]
  }
}


var equacao2 = new Equacao2()

function appendequacao2(){
  main.replaceChildren(equacao2.divmaior)
}

