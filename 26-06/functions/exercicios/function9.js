function contar(palavra, letra){
    let ocorrencia = 0

    for(let i = 0; i< palavra.length; i++ ){
        if (palavra[i] === letra){
            ocorrencia++
        }
    }   return ocorrencia;

}
console.log(contar("LEANDRINHA", "A"))