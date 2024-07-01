const maior = (x,y) => {
    
    if(x>y){
        console.log(`O número ${x} é maior.`);
    }
    else if(y>x){
        console.log(`O número ${y} é maior`);
    }
    else if(x ===y || y ===x){
        console.log("Os números são iguais!")
    }

}

maior(100,10)