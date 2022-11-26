/* Promises */
function show() {
    setTimeout(() => {
        console.log('Oi!')
    }, 2000);

    console.log('Até logo!')
}

show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if (n > 10) {
        resolve()
    } else {
        reject()
    }
})

minhaPromise
.then(result => console.log('resolveu'))
.catch(err => console.log('errou'))
.finally(() => console.log('Finally!'))

//------ exemplo ------
function showHello() {
    console.log('Hello')
}

function showGoodBye() {
    console.log('Goodbye!')
}

import fetch from 'node-fetch'

// fetch()
const firstUser = (userId) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

firstUser(1)

fetch('htpps://viaceo.com.br/ws/01001000/json')
.then(response => response.json())
.then(cep => {
    console.log(cep.bairro, cep.logradouro);
})
