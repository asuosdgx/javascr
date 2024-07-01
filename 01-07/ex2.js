const palavras = ["Amarelo", "sol", "daedro", "suricato", "opening","diamba", "carambola"]

let maiusc = [palavras.map((palavra) => { 
    return palavra[0].toUpperCase() + palavra.substring(1); 
    }).join(" ")]
   maiusc.forEach(palavra => {
        console.log(palavra)
   });
   



   

