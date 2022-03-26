//add card de comentario
function add() {
    let json = {
        
    }

    let corpo = document.querySelector(".corpo")
    let card = document.createElement("div")
    card.className = "card"
    card.float = "left"
    let btns = document.createElement("div")
    card.className = "btns"
    btns.float = "left"
    card.innerHTML = "<div class='card' style='float:left;background-color:#ffffff;width:300px;'>" + document.getElementById("compromisso").value + "</div>"

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
  
fetch("http://localhost:3000/livro")
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        data.forEach(x => {
            generateLivro(x);
        })
    })
    .catch(err => {
        console.warn(err);
    });

function generateLivro(obj) {
    let teste = document.querySelector(".model_tabela").cloneNode(true);
    teste.classList.remove("model");

    teste.querySelectorAll("td")[0].innerHTML = obj.nome_livro;
    teste.querySelectorAll("td")[1].innerHTML = obj.capa;
    teste.querySelectorAll("td")[2].innerHTML = obj.escrita;

    document.querySelector("#tabela>thead").appendChild(teste);
}

document.querySelectorAll(".model_tabela").forEach(x => {
    x.style.display = "none";
});

function filtrar() {
    let input = document.getElementById("txtColuna1").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[0].innerHTML.toLowerCase();

        if (coluna.includes(input)) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    if (input == "") {
        document.querySelectorAll(".model_tabela").forEach(x => {
            x.style.display = "none";
        });
    }
}