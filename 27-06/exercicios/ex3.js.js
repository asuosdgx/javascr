let arquivos = ["j.mp3", "k.mp3", "l.mp3", "m.mp4", "s.mp4"]
let arq2 = ["keila.jpg", "Ane.jpg", "Leiloca.png"]

function formatf(x, ext){
    for(let i = 0; i < x.length; i++) {
        if(x[i].includes(ext)){
            console.log(x[i])
  };
       
}
}
formatf(arq2, ".jpg")
   