function getSum(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}

console.log(getSum(2, 5))

// Spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4]
console.log(arr2)
// merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = [...array1, ...array2];

console.log(mergeArrays)


//  Destructuring
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4
}

const marca = carro.marca
const ano = carro.ano;

//const {marca,ano} = carro;

const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais: {
            livros: ['Dom Casmurro', 'O Cortiço'],
            filmes: ['Senhor dos Anéis', 'Matrix']
        },
        fisicas: {
            cadernos: ['Caderno'] 
        }
    }
}

const {livros, videos} = cliente.compras.digitais;

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

const [primeira, segunda, terceira] = frutas;