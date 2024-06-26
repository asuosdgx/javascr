function area(r, r){
    const pi = 3.14
    let result = (pi*(r*r))
    console.log(`A área do círculo é ${result.toFixed(2)}`)
    return result
}
function nivel_area(result){
    if(result > 0 && result <= 20){
        console.log("Nível I")
    }
    else if( result > 20 && result <=40){
        console.log("Nível II")
    }
    else{
        console.log("Nível Inválido")
    }
}

area(1.2, 1.2)
nivel_area(4.52)

