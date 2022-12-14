let btnSenha = document.querySelector('#mostraSenhaCadastrar');
let btnComfirmSenha = document.querySelector('#mostraComfirmSenhaCadastrar');

let nome  = document.querySelector('#nomeCadastrar');
let labelNome  = document.querySelector('#labelNomeCadastrar');
let valideNome = false;

let usuario =  document.querySelector('#usuarioCadastrar');
let labelUsuario  = document.querySelector('#labelUsuarioCadastrar');
let valideUsuario = false;

let senha =  document.querySelector('#senhaCadastrar');
let labelSenha  = document.querySelector('#labelSenhaCadastrar');
let valideSenha = false;

let comfirmSenha =  document.querySelector('#comfirmSenhaCadastrar');
let labelComfirmSenha  = document.querySelector('#labelComfirmSenhaCadastrar');
let valideComfirmSenha = false;

let msgError = document.querySelector('.msgErrorCadastrar');
let msgSuccess  = document.querySelector('.msgSuccessCadastrar');


nome.addEventListener('keyup', ()=>{
    if( nome.value.length <= 2 ) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        valideNome = false;
    }else {
        labelNome.setAttribute('style', 'color:#5434af');
        nome.setAttribute('style', 'border-color:#5434af');
        labelNome.innerHTML = 'Nome';
        valideNome = true;
    }
});

usuario.addEventListener('keyup', ()=>{
    let userJaExiste = false;
    let listaUser = [];

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    console.log(listaUser);
    listaUser.forEach((item) => {
        if(usuario.value == item.userCad){
            userJaExiste = true;
        }
    });
    if(userJaExiste){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Este usuário já está cadastrado no sistema';
        usuario.setAttribute('style', 'border-color: red');
        valideUsuario = false;
    } else if( usuario.value.length <= 4 ) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        valideUsuario = false;
    }else {
        labelUsuario.setAttribute('style', 'color:#5434af');
        usuario.setAttribute('style', 'border-color:#5434af');
        labelUsuario.innerHTML = 'Usuario';
        valideUsuario = true;
    }
});

senha.addEventListener('keyup', ()=>{
    if( senha.value.length <= 5 ) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        valideSenha = false;
    }else {
        labelSenha.setAttribute('style', 'color:#5434af');
        senha.setAttribute('style', 'border-color:#5434af');
        labelSenha.innerHTML = 'Senha';
        valideSenha = true;
    }
});

comfirmSenha.addEventListener('keyup', ()=>{
    if( senha.value != comfirmSenha.value ) {
        labelComfirmSenha.setAttribute('style', 'color: red');
        labelComfirmSenha.innerHTML = 'Confirmar Senha * as senhas não conferem';
        comfirmSenha.setAttribute('style', 'border-color: red');
        valideComfirmSenha = false;
    }else {
        labelComfirmSenha.setAttribute('style', 'color:#5434af');
        comfirmSenha.setAttribute('style', 'border-color: #5434af');
        labelComfirmSenha.innerHTML = 'Confirmar Senha';
        valideComfirmSenha = true;
    }
});

function cadastrar() {
    if(valideComfirmSenha && valideSenha && valideUsuario && valideNome) { 
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        );

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(() =>{
            let element = document.getElementById('modalCadastro');
            element.classList.remove('show-modal');
            let modalLogin = document.getElementById('modalLogin');
            modalLogin.classList.add('show-modal');
        }, 3000);

        
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}


btnSenha.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senhaCadastrar');
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

btnComfirmSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#comfirmSenhaCadastrar')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha.setAttribute('type', 'password');
    }
})
