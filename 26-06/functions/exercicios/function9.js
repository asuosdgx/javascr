function conta_string(palavra, caractere){

for (let i = 0, j = palavra.length; i < j; i++) { 
    let ocorrencias= 0
    if (palavra[i].toLowerCase() == caractere) { 
        ocorrencias++; //Soma +1 a variavel ocorrencias 
    } 
    let completo = console.log(`Foram encontradas ${ocorrencias} letras "${caractere}"`); 
    return completo

}


}
conta_string("ANA É UMA BANANA PRETA", "A")