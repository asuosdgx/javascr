let arr = ["batata", "arroz", "oleo"]
let arr2 = ["cunt", "deus", "diamba"]
function busca_f(arr, x, y ){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].includes(x)){
            return x
        }
        else{
            return(y + x)
        }
}
}

console.log(busca_f(arr2, "god", "nao tem "))