let lista1 = ["CrazyHorse", "TheStooges", "X", "UG", "Obladiblada"]
let lista2 = ["Apple", "Big", "Two", "Twenty-Three"]

function str_5(x){
let newstr = []

for(let i = 0; i<x.length; i++){
    if(x[i].length > 5){
       newstr.push(x[i])
    }
}
    return newstr
}

console.log(str_5(lista2))