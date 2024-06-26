function imc_f(peso, altura){
    let imc = peso /(altura*altura)
    console.log(imc.toFixed(2))
    return imc
}

function status_imc(imc){
    if (imc < 18.5){
        console.log( imc + " Magreza")
      }
      else if(imc >= 18.5 &&  imc <25){
        console.log( imc +" Normal")
      }
      else if(imc >=25 &&  imc <30){
        console.log( imc +" Sobrepeso")
      }
      else if(imc >= 30 &&  imc <35){
        console.log( imc +" Obesidade Grau 1")
      }
      else if(imc >= 35 &&  imc <40){
        console.log( imc +" Obesidade Grau 2")
      }
      else if(imc >=40){
        console.log( imc +" Obesidade Grau 3")
      }

    }

    imc_f(77, 1.87)
    status_imc(22.02)

