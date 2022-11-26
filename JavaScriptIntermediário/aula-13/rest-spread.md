    Rest / Spread

Rest parameters - permite trabalhar com uma quantidade indefinida de parâmetros em uma afunção ou de elementos em um array.
Em uma função, o rest permite capturar os argumentos:

function getSum(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}

Spread operator - Permite expandir uma expressão recebendo múltiplos argumentos ou elementos. Podemos utilizar para concatenar/mergrar arrays
const arr = [1, 2, 3];
const arr2 = [...arr, 2]
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = [...array1, ...array2];

    Destructuring

A deestruturação nos permite extrair dados de arrays e objetos e defini-los em novas variáveis.

Destructuring Objetos
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4
}

const {marca,ano} = carro;

Destructuring Arrays
const frutas = ['Banana', 'Uva', 'Morango'];
const [primeira, segunda, terceira] = frutas;