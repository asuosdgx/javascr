const livro = {
    Título: "O livro",
    Autor: "O autor",
    publicação: [
        { editora:  "Abril" ,ano: "2007"},
    
    ]}
    for(let l of livro.publicação){
    console.log("editora: ", l.editora)
    }