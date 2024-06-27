let num = [1,2,3,4,5,6,7]
let num2 = [55,22,77,96,36,87,44]


for(let i = 0;i< num2.length; i++){
    console.log(num2[i])   
}
    console.log(`O maior numero é ${Math.max.apply(null, num2)}`);