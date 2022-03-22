function add() {
    let corpo = document.querySelector(".corpo")
    let card = document.createElement("div")
    card.className = "card"
    card.float = "left"
    let btns = document.createElement("div")
    card.className = "btns"
    btns.float= "left"
    card.innerHTML = "<div class='card' style='float:left;background-color:#ffffff;width:300px;'>"+document.getElementById("compromisso").value+"</div>"

    let importante = document.createElement("img")
    importante.addEventListener("click", () => {
        card.setAttribute("style","background-color:#fbb;border: 1px solid #600;");
    });
    
    //btns.add.importante;

    let excluir = document.createElement("img")
    excluir.className = "excluir"
    excluir.textalign = "left"
    excluir.src = "../assets/trash.png"
    excluir.width = "25"
    excluir.height = "25"
    excluir.addEventListener("click", () => {
        card.remove();
    });

    fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: "comentarios"
        
    })

    .then(resp => { return resp.json(); })
    .then(data => {
        var comentario = document.querySelector("#comentario").value
        console.log(comentario)
    })

    

    card.appendChild(excluir)
    corpo.appendChild(card)
}





// function load() {
//     add();
// }

// function add() {
//     fetch("http://localhost:3000/perfil")
//         .then(resp => {
//             return resp.json();
//         })
//         .then(data => {
//             data.forEach(local => {
//                 let corpo = document.querySelector(".corpo")
//                 let card = document.createElement("div")
//                 card.className = "card"
//                 card.float = "left"
//                 let btns = document.createElement("div")
//                 card.className = "btns"
//                 btns.float = "left"
//                 card.innerHTML = "<div class='card' style='float:left;background-color:#ffffff;width:300px;'>" + document.getElementById("compromisso").value + "</div>"

//                 let importante = document.createElement("img")
//                 importante.addEventListener("click", () => {
//                     card.setAttribute("style", "background-color:#fbb;border: 1px solid #600;");
//                 });

//                 let excluir = document.createElement("img")
//                 excluir.className = "excluir"
//                 excluir.textalign = "left"
//                 excluir.src = "../assets/trash.png"
//                 excluir.width = "25"
//                 excluir.height = "25"
//                 excluir.addEventListener("click", () => {
//                     card.remove();
//                 });

//                 card.appendChild(excluir)
//                 corpo.appendChild(card)
//             })
//         })

// }