// function hi_f(){
//     console.log("hi *-*")
// }
// hi_f();

// let a = 45
// function hi_f(){
//     let a = 5
//     let b = 8 //* as variáveis dentro da função tem valores dentro do escopo
//                     //* dando 

//     console.log(`A soma é ${a + b}`)

// }
// hi_f();

// let num1= 2;                                    //* escopo global
// let num2 = 3;

// function somaf(){
//     console.log(`A soma é ${num1 + num2}`)
// }
// somaf();

function med_f(a, b){
    let result = ((a+b)/2)
    return result
}

let media1 = med_f(7.8, 9, 8.32)   
let media2 = med_f(8, 9.6, 5.5)

let media_turma = med_f(media1, media2)
console.log(media_turma)


