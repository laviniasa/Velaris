const imgCapa = document.querySelector('#imgCapa');

const userData = JSON.parse(localStorage.getItem('userdata'));

capa.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (data) => {
        console.log(data.target.result);
        imagem = data.target.result;
        imgCapa.src = imagem;
    }
    reader.readAsDataURL(file);
});


function load() {
    carregarDadosLivro();
    atualizarCapa();
}

function carregarDadosLivro() {
    console.log(userData.capa)
    imgCapa.src = (userData.capa != "") ? userData.capa : '../assets/semimagens.png';
}