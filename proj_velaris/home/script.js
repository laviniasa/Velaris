function limpar() {
    $(data).show();
}

function filtrar() {
    var termo = $('#pesquisa').val().toUpperCase();
    var listar = setListar();

    $(listar).each(function () {
        if ($(this).html().toUpperCase().indexOf(termo) === -1) {
            $(this).hide();
        }
    });
    
    // let input = document.getElementById("inp").value.toLowerCase();
    // let filtro = document.querySelectorAll("h1");
    // let card = document.querySelectorAll(".cardAssistido")

    // filtro.forEach((item, index) => {
    //     (item.innerHTML.toLowerCase().includes(input)) ? card[index].style.display = "flex": card[index].style.display = "none";
    // })
    fetch("http://localhost:3000/usuario")
    .then(resp => { return resp.json() })
    .then(data => {
        console.log(data);
        setListar(data);

        if (searchText === ''){
            setLista(dados);
        } else {
            setLista(
                dados.filter(item => (item.nome_completo.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
            )
        }
    })
    .catch(err => {console.log(err);});

}

//add card de comentario
function add() {
    let corpo = document.querySelector(".corpo")
    let card = document.createElement("div")
    card.className = "card"
    card.float = "left"
    let btns = document.createElement("div")
    card.className = "btns"
    btns.float = "left"
    card.innerHTML = "<div class='card' style='float:left;background-color:#ffffff;width:300px;'>" + document.getElementById("compromisso").value + "</div>"

    // let comment = { coment: "qualquer coisa qualquer coisa qualquer coisa qualquer coisa qualquer" }
    // localStorage.setItem("comment", JSON.stringify(comment));

    // let commentString = localStorage.getItem("comment");
    // let commentObj = JSON.parse(commentString);
    // console.log(commentObj.comment);

    // let importante = document.createElement("img")
    // importante.addEventListener("click", () => {
    //     card.setAttribute("style","background-color:#fbb;border: 1px solid #600;");
    // });

    let excluir = document.createElement("img")
    excluir.className = "excluir"
    excluir.textalign = "left"
    excluir.src = "../assets/trash.png"
    excluir.width = "25"
    excluir.height = "25"
    excluir.addEventListener("click", () => {
        card.remove();
    });


    card.appendChild(excluir)
    corpo.appendChild(card)
}


// function enviarComment() {

// }