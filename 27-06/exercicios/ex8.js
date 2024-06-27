function inverse(frase){
    frase_rev = ""
    for (var i = frase.length -1; i >= 0; i--) {
        frase_rev += frase[i];
    }
    return frase_rev
}

console.log(inverse("O rato roeu a roupa da princesinha pobrinha"))

