// Manipulando Arrays

const animals = ["Galinha", "Cachorro", "Elefante", "Girafa", "Leão"]

//adicionar item ao fim do array
console.log(animals.push("rato"))
console.log(animals)
// Adcionar item no começo
console.log(animals.unshift("porco"))
console.log(animals)
// Remover item no fim
console.log(animals.pop())
console.log(animals)
// Remover item no começo
console.log(animals.shift())
console.log(animals)
// Pegar somente alguns elementos do Array
// Não modificar o array
console.log(animals.slice(0,3))
console.log(animals)
// Remover 1 ou mais itens do Array
//console.log(animals.splice(1,3))
console.log(animals)

let index = animals.indexOf('Leão')
console.log(index)
animals.splice(index, 1)
console.log(animals)
