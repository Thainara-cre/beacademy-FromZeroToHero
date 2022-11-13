// OERADORES LÓGICOS

// Operador Incremento e Decremento
// ++ --
let incrementNumber = 4
console.log(incrementNumber)
// +1
incrementNumber++
console.log(incrementNumber)
++incrementNumber
console.log(incrementNumber)
// -1
let decrementNumber = 50
decrementNumber--
console.log(decrementNumber)
decrementNumber--
console.log(decrementNumber)
decrementNumber--
console.log(decrementNumber)

// Operadores Aritiméticos
// + - / * %

let note1 = 10
let note2 = 7.5
let note3 = 9
let note4 = 4.5
let avg = (note1 + note2 + note3 + note4)/4
console.log(avg)
console.log(Number(Math.floor(avg)))

// Operadores Relacionais e Igualdade
// < > == ==== != !== >= <=

let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // != Diferente no valor
console.log(relation)
relation = numberRelation1 !== numberRelation2 // !== Diferente no valor ou no tipo
console.log(relation)
relation = numberRelation1 == numberRelation2 // == Igual no valor
console.log(relation)
relation = numberRelation1 === numberRelation2 // === Igual no valor e no tipo (AND)
console.log(relation)


// Operador de atribuição

let newNumber = 20
newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5

console.log(newNumber)

// Operadores condicionais (Ternário)
// (Condition) ? true : false

let value = 24
let value2 = 32

const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é mentira'
console.log(newCondition) 

const newCondition2 = value >= value2 ? 'Isso é verdade' 
                            : value <= value2 ? 'Isso é verdade , segunda resposta true' : 'Resposta falsa para tudo!!'
console.log(newCondition2) 

