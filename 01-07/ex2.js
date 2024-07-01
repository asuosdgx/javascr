const palavras = ["Amarelo", "sol", "daedro", "suricato", "opening","diamba", "carambola"]
const palavras2 = ["deus", "brasil", "anil", "livro"]

let maiusc = [palavras2.map((palavra) => { 
    return palavra[0].toUpperCase() + palavra.substring(1); 
    }).join(" ")]
   maiusc.forEach(palavra => {
        console.log(palavra)
   });
   



   

