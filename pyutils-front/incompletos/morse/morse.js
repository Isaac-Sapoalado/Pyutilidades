

let dict = {

    'a':'.-',
    'b':'-...',
    'c':'-.-.',
    'd':'-..',
    'e':'.',
    'f':'..-.',
    'g':'--.',
    'h':'....',
    'i':'..',
    'j':'.---',
    'k':'-.-',
    'l':'.-..',
    'm':'--',
    'n':'-.',
    'o':'---',
    'p':'.--.',
    'q':'--.-',
    'r':'.-.',
    's':'...',
    't':'-',
    'u':'..-',
    'v':'...-',
    'w':'.--',
    'x':'-..-',
    'y':'-.--',
    'z':'--..',
    '0':'-----',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    ' ':'      '
}

function achar(x){
    for (i in dict){
        if (dict[i] == x){
            return i
        }
    }
    return ''
}

function morse(text,tipo=1){


    if (tipo == 1){
        let net = ''
        for(i of text){
        net += dict[i] + ' '
        }
        return net
    }
    if (tipo == -1){
        let frase = ''
        let palavra = ''
        let acum = ''
        for (i of text){
            if (i == ' '){
                palavra += achar(acum)
            }else{
                acum += achar(i)
            }
            
        }
    }
    

}

console.log(morse('abc a'))