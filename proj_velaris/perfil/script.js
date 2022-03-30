const pswUser = document.querySelector('#pswUser');
const tbody = document.querySelector('#tbody');
const imgUser = document.querySelector('#imgUser');
const emailUser = document.querySelector('#emailUser');
const nomeUser = document.querySelector('#nomeUser');

const camera = document.querySelector('#camera');
const foto = document.querySelector('#foto');

const userData = JSON.parse(localStorage.getItem('userdata'));

var imagem = "";

camera.addEventListener('click', () => {
    foto.click();
});

foto.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (data) => {
        console.log(data.target.result);
        imagem = data.target.result;
        imgUser.src = imagem;
    }

    reader.readAsDataURL(file);
});

function load() {
    carregarDados();
    atualizarDados();
}

function carregarDados() {
    console.log(userData.foto)
    nomeUser.value = userData.nome
    imgUser.src = (userData.foto != "") ? userData.foto : './assets/perfil.png';
    emailUser.value = userData.email;
}

function atualizarDados() {
    let data = {};

    if(nomeUser.value !== userData.nome) data.nome = nomeUser.value
    if(pswUser.value !== "") data.senha = pswUser.value;
    if(emailUser.value !== userData.email) data.email = emailUser.value;
    if(imgUser.src !== userData.foto) data.foto = imgUser.src;

    fetch("http://localhost:7000/usuario/" + userData.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(resp => { return resp.json() })
    .then(data => {
        if(data.length > 0) {
            localStorage.setItem('userdata', JSON.stringify(data[0]));
        } else {
            alert("Não foi possivel atualizar os dados");
        }
    })
}

async function loadCapas(){
    fetch("http://localhost:7000/livro/")
    .then(resp => { return resp.json()})
    .then(data => {
        let capa = document.querySelectorAll('.capa');
        data.forEach((item,index) =>{
            capa[index].src = item.capa;
        })
    })
}

function generateCapas(data) {
 
    localStorage.setItem('ex1', JSON.stringify);
    imgCapa = JSON.parse(localStorage.getItem('userdata'));
    

    livro.innerHTML = userdata;
}

function init() {
    loadCapas();
}

(init) ();