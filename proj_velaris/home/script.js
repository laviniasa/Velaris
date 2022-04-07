//add card de comentario
function add(json) {

    let corpo = document.querySelector(".corpo")
    document.querySelector(".corpo").querySelectorAll(".btns").forEach(e => {
        e.remove()
    })

    json.forEach(e => {
        let card = document.createElement("div")
        let btns = document.createElement("div")
        card.className = "btns"
        btns.float = "left"
        card.innerHTML = e.comentario

        let excluir = document.createElement("img")
        excluir.className = "excluir"
        excluir.textalign = "left"
        excluir.src = "../assets/trash.png"
        excluir.style.width = "25px"
        excluir.style.height = "25px"
        excluir.addEventListener("click", () => {
            card.remove();
        });

        card.appendChild(excluir)
        corpo.appendChild(card)
    })
}

function chamarComentario() {
    console.log("oi")
    async function get() {
        let item = await fetch("http://localhost:7000/comentario");
        let resp = await item.json();
        return resp;
    }
    get().then(resp => {
        add(resp)
    })
}

fetch("rs")
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
    teste.querySelectorAll("td")[1].innerHTML = obj.genero;
    teste.querySelectorAll("td")[2].innerHTML = obj.escritor;

    document.querySelector("#tabela>thead").appendChild(teste);
}

document.querySelectorAll(".model_tabela").forEach(x => {
    x.style.display = "none";
});

function filtrarUsuario() {
    let input = document.getElementById("pesquisar").value.toLowerCase();

    document.querySelectorAll(".model_user").forEach(x => {
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


function filtrarGenero() {
    let input = document.getElementById("txtColuna2").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[1].innerHTML.toLowerCase();

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

function filtrarEscritor() {
    let input = document.getElementById("txtColuna3").value.toLowerCase();

    document.querySelectorAll(".model_tabela").forEach(x => {
        coluna = x.querySelectorAll("td")[2].innerHTML.toLowerCase();

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

document.getElementById("add").addEventListener("click", () => {
    fazerComentario();
})

async function fazerComentario() {
    let data = {
        comentario: document.getElementById("compromisso").value,
        id_usuario: JSON.parse(localStorage.getItem("userdata")).id
    }
    fetch("http://localhost:7000/comentario", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
    chamarComentario()
}

function handleLogoutClick() {
    AuthActions.logout().then(() => {
        window.location.reload();
    });
}

chamarComentario()


async function loadCapas() {
    fetch("http://localhost:7000/livro/")
    .then(resp => { return resp.json()})
    .then(data => {
        data.forEach((item, index) => {
            capa[index].src = item.capa;
            capa[index].parentNode.addEventListener("click", () => {
                // console.log("../dadoslivro/index.html?id="+item.id)
                window.location.href = "../home/index.html?id="+item.id
            })
        })
    })
}

function generateCapas(data) {
    localStorage.setItem('ex1', JSON.stringify);
    imgCapa = JSON.parse(localStorage.getItem('userdata'));
    
    albumdetails.innerHTML = userData;
}

function init() {
    loadCapas();
    livros_carrossel()
}

(init) ();

function livros_carrossel(){
    async function loadLivros(){
        let get = await fetch("http://localhost:7000/livro/")
        let resp = await get.json();
        return resp
    }
    loadLivros().then(resp=>{
        for(let a=0; a< (resp.length > 4 ? 5 : resp.length); a++){
            let data=resp[(Math.floor((Math.random() * resp.length) + 0)).toFixed(0)]
            let model = document.querySelector(".item").cloneNode(true);
            model.querySelector("#imagem").src = data.capa
            model.addEventListener("click", () => {
                window.location.href = `../dadoslivro/index.html?id=${data.id}`
            })
            model.classList.remove("model")
            document.getElementById("carousel").appendChild(model)
        }
    })
    
}


// #define NUM_OCTAVES 5

// vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
// vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
// vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

// float rand(float n){return fract(sin(n) * 43758.5453123);}
// float rand(vec2 n) { 
//     return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
// }
// float noise(float p){
//     float fl = floor(p);
//   float fc = fract(p);
//     return mix(rand(fl), rand(fl + 1.0), fc);
// }
// float noise(vec2 n) {
//     const vec2 d = vec2(0.0, 1.0);
//   vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
//     return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
// }

// float snoise(vec2 v) {
//     const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
//                         0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
//                         -0.577350269189626,  // -1.0 + 2.0 * C.x
//                         0.024390243902439); // 1.0 / 41.0
//     vec2 i  = floor(v + dot(v, C.yy) );
//     vec2 x0 = v -   i + dot(i, C.xx);
//     vec2 i1;
//     i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
//     vec4 x12 = x0.xyxy + C.xxzz;
//     x12.xy -= i1;
//     i = mod289(i); // Avoid truncation effects in permutation
//     vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
//         + i.x + vec3(0.0, i1.x, 1.0 ));

//     vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
//     m = m*m ;
//     m = m*m ;
//     vec3 x = 2.0 * fract(p * C.www) - 1.0;
//     vec3 h = abs(x) - 0.5;
//     vec3 ox = floor(x + 0.5);
//     vec3 a0 = x - ox;
//     m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
//     vec3 g;
//     g.x  = a0.x  * x0.x  + h.x  * x0.y;
//     g.yz = a0.yz * x12.xz + h.yz * x12.yw;
//     return 130.0 * dot(m, g);
// }
// const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);

// #define NB_OCTAVES 8
// #define LACUNARITY 10.0
// #define GAIN 0.5

// float fbm(in vec2 p) {
//     float total = 0.0,
//         frequency = 1.0,
//         amplitude = 1.0;
    
//     for (int i = 0; i < NB_OCTAVES; i++) {
//         total += snoise(p * frequency) * amplitude;
//         frequency *= LACUNARITY;
//         amplitude *= GAIN;
//     }    
//     return total;
// }


//   uniform float u_time;
// uniform float u_height;
// uniform vec2 u_rand;

// float xDistortion;
// float yDistortion;

// varying float vDistortion;
// varying vec2 vUv;

// void main() {
//     vUv = uv;
//     vDistortion = snoise(vUv.xx * 3. - vec2(u_time / u_rand.x, u_time / u_rand.x) + cos(vUv.yy) * u_rand.y) * u_height;
//     xDistortion = snoise(vUv.xx * 1.) * u_height * u_rand.x / 10.;
//     vec3 pos = position;
//     pos.z += (vDistortion * 55.);
//     pos.x += (xDistortion * 55.);
//     pos.y += (sin(vUv.y) * 55.);
    
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
// }

//   vec3 rgb(float r, float g, float b) {
//     return vec3(r / 255., g / 255., b / 255.);
// }
// vec3 rgb(float c) {
//     return vec3(c / 255., c / 255., c / 255.);
// }

// uniform vec3 u_lowColor;
// uniform vec3 u_highColor;
// uniform float u_time;

// varying vec2 vUv;
// varying float vDistortion;
// varying float xDistortion;

// void main() {
//     vec3 highColor = rgb(u_highColor.r, u_highColor.g, u_highColor.b);
    
//     vec3 colorMap = rgb(u_lowColor.r, u_lowColor.g, u_lowColor.b);

//     colorMap = mix(colorMap, highColor, vDistortion);
    
//     gl_FragColor = vec4(colorMap, 1.);
// }

// import * as THREE from 'https://cdn.skypack.dev/three@v0.122.0';

// // Helper functions
// const rgb = function(r, g, b) {
//     return new THREE.Vector3(r, g, b);
// }
// const loader = function(path, texture) {
//     return new Promise((resolve, reject) => {
//         let loader = new THREE.FileLoader();
//         if(typeof texture !== "undefined") {
//             loader = new THREE.TextureLoader();
//         }
//         loader.load(path, (item) => resolve(item));
//     })
// }
// const randomInteger = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // -- End Helper Functions

// const config = {
//     individualItem: '.album-item', // class of individual item
//     carouselWidth: 1000, // in px
//     carouselId: '#album-rotator', // carousel selector
//     carouselHolderId: '#album-rotator-holder', // carousel should be <div id="carouselId"><div id="carouselHolderId">{items}</div></div>
//     colors: [
//         // Define colors for each item. If more items than colors, then first color will be used as default
//         // Format { low: rgb(), high: rgb() for each color }
//         { low: rgb(0, 114, 255), high: rgb(48, 0, 255) },
//         { low: rgb(236, 166, 15), high: rgb(233, 104, 0) },
//         { low: rgb(43, 75, 235), high: rgb(213, 51, 248) },
//         { low: rgb(175, 49, 49), high: rgb(123, 16, 16) }
//     ]
// }

// // Async function for generating webGL waves
// const createWave = async function(selector, colors) {      
//     if(document.querySelectorAll(selector) !== null && document.querySelectorAll(selector).length > 0) {
//         // Import all the fragment and vertex shaders
//         const noise = document.getElementById('noise').textContent;
//         const fragment = document.getElementById('fragment').textContent
//         const vertex =document.getElementById('vertex').textContent
//         let i = 0;
//         // For each of the selector elements
//         document.querySelectorAll(selector).forEach(function(item) {
//             // Create a renderer
            
//             const newCanvas = document.createElement('canvas');
//             newCanvas.id = `canvas-${i}`;
//             item.appendChild(newCanvas);
            
//             const renderer = new THREE.WebGLRenderer({
//                 powerPreference: "high-performance",
//                 antialias: true, 
//                 alpha: true,
//                 canvas: document.getElementById(`canvas-${i}`)
//             });


//             // Get el width and height
//             const elWidth = parseFloat(window.getComputedStyle(item).width);
//             const elHeight = parseFloat(window.getComputedStyle(item).height);

//             // Set sizes and set scene/camera
//             renderer.setSize( elWidth, elHeight );
//             renderer.setPixelRatio( window.devicePixelRatio );

//             const scene = new THREE.Scene();
//             const camera = new THREE.PerspectiveCamera( 75, elWidth / elHeight, 0.1, 1000 );

//             // Check on colors to use
//             let high = colors[0].high; 
//             let low = colors[0].low;
//             if(typeof colors[i] !== "undefined") {
//                 high = colors[i].high;
//                 low = colors[i].low;
//                 ++i;
//             }

//             // And use the high color for the subtext.
//             if(item.querySelector('.subtext') !== null) {
//                 item.querySelector('.subtext').style.background = `rgba(${high.x},${high.y},${high.z},0.75)`;
//             }

//             // Create a plane, and pass that through to our shaders
//             let geometry = new THREE.PlaneGeometry(600, 600, 100, 100);
//             let material = new THREE.ShaderMaterial({
//                 uniforms: {
//                     u_lowColor: {type: 'v3', value: low },
//                     u_highColor: {type: 'v3', value: high },
//                     u_time: {type: 'f', value: 0},
//                     u_height: {type: 'f', value: 1},
//                     u_rand: {type: 'f', value: new THREE.Vector2(randomInteger(6, 10), randomInteger(8, 10)) }
//                 },
//                 fragmentShader: noise + fragment,
//                 vertexShader: noise + vertex,
//             });

//             // Create the mesh and position appropriately
//             let mesh = new THREE.Mesh(geometry, material);
//             mesh.position.set(0, 0, -300);
//             mesh.material.needsUpdate = true;
//             scene.add(mesh);
            
//             // On hover effects for each item
//             let enterTimer, exitTimer;
//             item.addEventListener('mouseenter', function(e) {
//                 if(typeof exitTimer !== "undefined") {
//                     clearTimeout(exitTimer);
//                 }
//                 enterTimer = setInterval(function() {
//                     if(mesh.material.uniforms.u_height.value >= 0.5) {
//                         mesh.material.uniforms.u_height.value -= 0.05;
//                     } else {
//                         clearTimeout(enterTimer);
//                     }
//                 }, 10);
//             });
//             item.addEventListener('mouseleave', function(e) {
//                 if(typeof enterTimer !== "undefined") {
//                     clearTimeout(enterTimer);
//                 }
//                 exitTimer = setInterval(function() {
//                     if(mesh.material.uniforms.u_height.value < 1) {
//                         mesh.material.uniforms.u_height.value += 0.05;
//                     } else {
//                         clearTimeout(exitTimer);
//                     }
//                 }, 10);
//             });

//             // Render
//             renderer.render( scene, camera );
//             let t = 0;

//             // Animate
//             const animate = function () {
//               requestAnimationFrame( animate );
//                 renderer.render( scene, camera );
//                 mesh.material.uniforms.u_time.value = t;
//                 t = t + 0.02;
//             };
//             animate();
//         });
//     }
// }

// document.addEventListener("DOMContentLoaded", function(e) {
//     createWave(config.individualItem, config.colors);

//     // Get items
//     const el = document.querySelector(config.individualItem);
//     const elWidth = parseFloat(window.getComputedStyle(el).width) + parseFloat(window.getComputedStyle(el).marginLeft) + parseFloat(window.getComputedStyle(el).marginRight);
    
//     // Track carousel
//     let mousedown = false;
//     let movement = false;
//     let initialPosition = 0;
//     let selectedItem;
//     let currentDelta = 0;

//     document.querySelectorAll(config.carouselId).forEach(function(item) { 
//         item.style.width = `${config.carouselWidth}px`;
//     });
    
//     document.querySelectorAll(config.carouselId).forEach(function(item) {
//         item.addEventListener('pointerdown', function(e) {
//             mousedown = true;
//             selectedItem = item;
//             initialPosition = e.pageX;
//             currentDelta = parseFloat(item.querySelector(config.carouselHolderId).style.transform.split('translateX(')[1]) || 0;
//         }); 
//     });
    
//     const scrollCarousel = function(change, currentDelta, selectedItem) {
//         let numberThatFit = Math.floor(config.carouselWidth / elWidth);
//         let newDelta = currentDelta + change;
//         let elLength = selectedItem.querySelectorAll(config.individualItem).length - numberThatFit;
//         if(newDelta <= 0 && newDelta >= -elWidth * elLength) {
//             selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${newDelta}px)`;
//         } else {
//             if(newDelta <= -elWidth * elLength) {
//                 selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(${-elWidth * elLength}px)`;
//             } else if(newDelta >= 0) {
//                 selectedItem.querySelector(config.carouselHolderId).style.transform = `translateX(0px)`;
//             }
//         }
//     }

//     document.body.addEventListener('pointermove', function(e) {
//         if(mousedown == true && typeof selectedItem !== "undefined") {
//             let change = -(initialPosition - e.pageX);
//             scrollCarousel(change, currentDelta, document.body);
//             document.querySelectorAll(`${config.carouselId} a`).forEach(function(item) {
//                 item.style.pointerEvents = 'none';
//             });
//             movement = true;
//         }
//     });
    
//     ['pointerup', 'mouseleave'].forEach(function(item) {
//         document.body.addEventListener(item, function(e) {
//             selectedItem = undefined;
//             movement = false;
//             document.querySelectorAll(`${config.carouselId} a`).forEach(function(item) {
//                 item.style.pointerEvents = 'all';
//             });
//         });
//     });

//     document.querySelectorAll(config.carouselId).forEach(function(item) {
//         let trigger = 0;
//         item.addEventListener('wheel', function(e) {
//             if(trigger !== 1) {
//                 ++trigger;
//             } else {
//                 let change = e.deltaX * -3;
//                 let currentDelta = parseFloat(item.querySelector(config.carouselHolderId).style.transform.split('translateX(')[1]) || 0;
//                 scrollCarousel(change, currentDelta, item);
//                 trigger = 0;
//             }
//             e.preventDefault();
//             e.stopImmediatePropagation();
//             return false;
//         });
//     });
// });
