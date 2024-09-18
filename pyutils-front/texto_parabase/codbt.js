
class CodBtexto{

    constructor(){

        let t = this
        this.divmaior = document.createElement("div")
        this.sel = document.createElement("select")
        this.txt1 = document.createElement("textarea")
        this.txt2 = document.createElement("textarea")
        let d1 = document.createElement("div")
        let d2 = document.createElement("div")
        let btn1 = document.createElement("button")
        let btn2 = document.createElement("button")
        let h1 = document.createElement("h1")
        let h2 = document.createElement("h2")
        let l = document.createElement("label")
        let op1 = document.createElement("option")
        let op2 = document.createElement("option")
        let op3 = document.createElement("option")
        let op4 = document.createElement("option")
        this.ascii = {
            32: ' ',
            33: '!',
            34: '"',
            35: '#',
            36: '$',
            37: '%',
            38: '&',
            39: "'",
            40: '(',
            41: ')',
            42: '*',
            43: '+',
            44: ',',
            45: '-',
            46: '.',
            47: '/',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            58: ':',
            59: ';',
            60: '<',
            61: '=',
            62: '>',
            63: '?',
            64: '@',
            65: 'A',
            66: 'B',
            67: 'C',
            68: 'D',
            69: 'E',
            70: 'F',
            71: 'G',
            72: 'H',
            73: 'I',
            74: 'J',
            75: 'K',
            76: 'L',
            77: 'M',
            78: 'N',
            79: 'O',
            80: 'P',
            81: 'Q',
            82: 'R',
            83: 'S',
            84: 'T',
            85: 'U',
            86: 'V',
            87: 'W',
            88: 'X',
            89: 'Y',
            90: 'Z',
            91: '[',
            92: '\\',
            93: ']',
            94: '^',
            95: '_',
            96: '`',
            97: 'a',
            98: 'b',
            99: 'c',
            100: 'd',
            101: 'e',
            102: 'f',
            103: 'g',
            104: 'h',
            105: 'i',
            106: 'j',
            107: 'k',
            108: 'l',
            109: 'm',
            110: 'n',
            111: 'o',
            112: 'p',
            113: 'q',
            114: 'r',
            115: 's',
            116: 't',
            117: 'u',
            118: 'v',
            119: 'w',
            120: 'x',
            121: 'y',
            122: 'z',
            123: '{',
            124: '|',
            125: '}',
            126: '~',
        }
        


        //assinando caracteristicas
        {
            this.divmaior.className = 'textobdivmaior'
            op1.value = 'decimal',op1.innerText = 'decimal'
            op2.value = 'binario',op2.innerText = 'binario'
            op3.value = 'octal',op3.innerText = 'octal'
            op4.value = 'hexadecimal',op4.innerText = 'hexadecimal'
            btn1.onclick = function(){t.converter(1)},btn1.innerText = 'codificar'
            btn2.onclick = function(){t.converter(-1)},btn2.innerText = 'decodificar'
            l.innerText = 'Codificação',h1.innerText = 'Codificar Texto'
            h2.innerText = 'Coloque o texto:'
        }

        //assinando hierarquia
        {
            this.sel.replaceChildren(
                op1,op2,op3,op4
            )
            d1.replaceChildren(this.txt1,this.txt2),d2.replaceChildren(btn1,btn2)
            this.divmaior.replaceChildren(h1,l,this.sel,h2,d1,d2)
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
    
    achar(x,t=1){
        if (t===1){
            for (let i in this.ascii){
            if (this.ascii[i] == x){
                return i
                }
            }
            return false
        }
        if (t===-1){
            for (let i in this.ascii){
                if (Number(i) === x){
                    return this.ascii[i]
                }
            }
            return ''
        }
    }

    textoparabase(txt,pars='decimal',tipo=1){
        let newtxt = ''
        if (tipo === 1){
    
            for (let i in txt){
            let dec = this.achar(txt[i])
            dec = Number(dec)
            let convertido = this.binario(dec,1,pars)
            if (pars === "binario"){
                newtxt += ' '+'0'.repeat(8-convertido.length)+convertido
            }else{
                newtxt += ' ' + convertido
                }
            }
            return newtxt
        }
        if (tipo === -1){
            let convertido = String(this.binario(txt,-1,pars))
            let ref = ''
            let indp = 0
            for (let i in convertido){
                ref += convertido[i]
                let dec = this.achar(Number(ref),t=-1)
                if (!(dec === '')){
                    newtxt += dec
                    ref = ''
                }
                indp += 1
            
            }
            return newtxt
        }
    }
    
    converter(num){
        if (num === 1){
            this.txt2.value = this.textoparabase(this.txt1.value,this.sel.value,num)
        }
        if (num === -1){
            this.txt1.value = this.textoparabase(this.txt2.value,this.sel.value,num)
        }
        
    }



}

var codbtex = new CodBtexto()

function appendcodbt(){
    main.replaceChildren(codbtex.divmaior)
}

