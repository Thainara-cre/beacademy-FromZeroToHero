let slides = document.querySelectorAll('.slide-container');
let index = 0;
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.getElementById('logado');
let btnSair = document.querySelector('#btnSair');
let btnLogar = document.querySelector('#btnLogar');
let shearchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.catalogo .container .container-image .image');

if(localStorage.getItem("token") != null) {
    btnSair.classList.remove('escondeBtn');
    btnLogar.classList.add('escondeBtn');
}else {
    let btnSair = document.querySelector('#btnSair');
    let btnLogar = document.querySelector('#btnLogar');
    btnLogar.classList.remove('escondeBtn');
    btnSair.classList.add('escondeBtn');
}


function sairLogin() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    document.location.reload(true);
    
}

function showModalLogin() {
    let modalLogin = document.getElementById('modalLogin');
    modalLogin.classList.add('show-modal');

}

function hideModalLogin() {
    let modalLogin = document.getElementById('modalLogin');
    modalLogin.classList.remove('show-modal');

}

function showModalCadastro() {
    
    let element = document.getElementById('modalCadastro');
    element.classList.add('show-modal');
}

function hideModalCadastro() {
    let element = document.getElementById('modalCadastro');
    element.classList.remove('show-modal');
    showModalLogin();
}

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);


shearchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = shearchBox.value;

    images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        setTimeout(() =>{
            let nada = document.querySelector('.nada');
            nada.innerHTML = "";
        }, 3000);
        if(value == title) {
            filter.style.display = "block";
        }else{
            let nada = document.querySelector('.nada');
            nada.innerHTML = "Nada encontrado";
        }

        if(shearchBox.value == ''){
            filter.style.display = "block";
            let nada = document.querySelector('.nada');
            nada.innerHTML = "";
        }
        
    });
}