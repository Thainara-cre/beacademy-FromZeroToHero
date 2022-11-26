

/* Funções callback */

function hello(name) {
    console.log(name)
}

function helloUser(callback) {
    callback('Marcelo')
}

function helloUser2(n) {
    n('Marcelo Vasques')
}

// helloUser(hello)

const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)
