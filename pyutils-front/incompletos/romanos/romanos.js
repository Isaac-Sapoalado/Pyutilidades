


let dict = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D'
}



// X ? V ? I
// 10 ? 5 ? 1
// IX = 19 
//no fim: +10 +5 +1
//de outro modo XIV
//no fim: +10 -1+5
//se 10 > 5 entao = 10 + 5, ou +10
//se 10 < 5 entao = 10 - 5, ou -10
//XD = 490
//490 = 400 + 90 + 0
////////CD + XC + ?

//1,2,3,5,6,7,8,10,20,30,50,60,70,80,100,200,300,500,600,700,800,1000
//I,II,III,V,VI,VII,VIII,X,XX,XXX,L,LX,LXX,LXXX,C,CC,CCC,D,DC,DCC,DCCC


function achar(x,t=1){
    if (t===1){
        for (i in dict){
            if (dict[i] == x){
                return Number(i)
            }
        }
        return 0
    }
    if (tipo == -1){
        for (i in dict){
            if (i == x){
                return dict[i]
            }
        }
        return ''
    }
    
}

function emroma(num,tipo=1){

    let array = []
    
    if (tipo === 1){
        let dec = 0
        for (i of num){
            array.push(achar(i.toUpperCase()))
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
        for (i of num){
            if (Number(i) > 5){

            }
        }
    }

}

console.log(emroma("CDXC"))


