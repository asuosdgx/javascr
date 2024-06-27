let data = ["20", "05", "1996"]
let data2 = ["19", "06", "1991"]

function dataformat_f(lista, separador){
    let newdata = lista.join(separador)
    console.log(newdata)
}

dataformat_f(data2, "-")