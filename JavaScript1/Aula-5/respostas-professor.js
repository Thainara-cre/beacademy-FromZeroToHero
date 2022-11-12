// 1. Declare uma variável de nome personal

    let person

// 2. Que tipo de dado é a variável cima?

    console.log(typeof person)

/*
    3 . Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * weight: Number (float)
        * isAdmin: Boolean
        * IsAman: Boolean
    
*/
    person = {
        name : 'Moarcir',
        age: 30,
        weight: 69,
        isAdmin: false,
        isAMan: true
    }
/*
    4. A variável human abixo é  de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:
        O humano <name> tem o peso <weight> kg.

*/

let human = {
        name : 'Moarcir',
        age: 30,
        weight: 69,
        isAdmin: false,
        isAMan: true
}

console.log(human)
console.log(typeof human)
console.log(`O humano ${human.name} tem o peso ${human.weight} Kg.`)

/*
5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let humans = []

/*
6. Reatribua valor para a variável acima, colocando dentro dela o objeto human da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

humans = [
    human
]

console.log(humans)
console.log(humans[0].name)

/* 
7. Coloque no console o valor da posição zero do Array acima
*/

/* 
8. Crie um novo objeto human e coloque na posição 1 do Array humans
*/

let newHuman = {
    name : 'Luan Monteiro',
    age: 30,
    weight: 90,
    isAdmin: true,
    isAMan: true
}

humans = [
    human,
    newHuman
]

/*

const = newHuman {
    name: "Luan Monteiro",
    age: 30,
    weight: 90.1,
    isAdmin: true,
    isAMan: true 
}

humans = {
human,
newHuman
}

//outros

human[1] = newHuman

/*
9. Sem rodar o código responda o resultado da saída abaixo:

a)
console.log(a)
var a = 1
// Resposta?? undefined

b)
let a
console.log(a)
{ 
let a = 2
console.log(a)
}
console.log(a)
// Resposta??

c)
console.log(b)
{
let b =3
console.log(b)
}
console.log(b)
// Resposta??

d)
const c = 10
{
console.log(c)
const c = 20
console.log(c)
}
// Resposta??
*/

