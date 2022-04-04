var livro = [
    {
        nome: "",
        capitulos: ""
    }
]
document.querySelector("#public").addEventListener( "click",()=>{
    window.location.href = "../home/index.html"
})
document.querySelector("#capitulos").addEventListener("change", (e)=>{
    if(document.querySelector("#capitulos").value<=0){
        document.querySelector("#capitulos").value=1
    }else{
        document.querySelector("#caps").querySelectorAll('option').forEach(e=>{
            if(!e.disabled == true){
                e.remove();
            }
        })
       for(let a=1; a<(parseInt(document.querySelector("#capitulos").value)+1);a++){
            let model = document.createElement("option")
            model.value=a
            model.innerHTML=`${a} - `
            livro.push({
                capitulo: a,
                nome_capitulo: "",
                texto: ""
            })
            document.querySelector("#caps").appendChild(model)
       }
       livro[0].nome = document.querySelector("#nome-livro").value
       livro[0].capitulos = document.querySelector("#capitulos").value
    }
})

document.querySelector("#caps").addEventListener("change", ()=>{
    if(livro[parseInt(document.querySelector("#caps").value)].nome_capitulo!=""){
    }
    document.querySelector("#captulo-nome").value = livro[parseInt(document.querySelector("#caps").value)].nome_capitulo
    document.querySelector("#texto-captulo").value = livro[parseInt(document.querySelector("#caps").value)].texto
    document.querySelector("#captulo-nome").onchange = () => {
        livro[parseInt(document.querySelector("#caps").value)].nome_capitulo = document.querySelector("#captulo-nome").value
        document.querySelector("#caps").querySelectorAll('option').forEach(e=>{
            if(e.value == document.querySelector("#caps").value){
                console.log(e.innerHTML)
                e.innerHTML = `${livro[parseInt(document.querySelector("#caps").value)].capitulo} - ${livro[parseInt(document.querySelector("#caps").value)].nome_capitulo}`
            }
        })
    }
    document.querySelector("#texto-captulo").onchange = () => {
        livro[parseInt(document.querySelector("#caps").value)].texto = document.querySelector("#texto-captulo").value
    }
})
