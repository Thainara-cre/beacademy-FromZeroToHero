// For
// for (inicio; condição; iteração)

for (let i = 1; i <= 10; i++){
    console.log(i)
}

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    if(i === 5) {
        break
    }
    console.log(i)
}

// WHILE (ENQUANTO)
let interator = 1

while (interator <= 20) {
    console.log(interator)

    //Incremento
    interator++
}

// FOR OF
// Array 

let number = [2,3,4,5,6]

for (num of number) {
    console.log(num)
}

for (num of number) {
    if (num > 4) {
        console.log(num)
    }
}

let namber = ['Maria', 'Pedro', 'João', 'Jenifer', 'Luan']
    // name = nomes (FOR OF)
    // FOR OF (valores do Array)
for (name of number) {
    console.log(name)
}

// For in

let animals = {
    name: 'Leão',
    weight: 200,
    age: 4
}

for (item in animals) {
    console.log(item)
}

for (item in animals) {
    // Tipo 1 para capturar valores de um objeto em um for in
    console.log(animals["age"])
    // Tipo 2 para capturar o objeto
    console.log(animals)
    // Tipo 3 mostra os valores dentro das propriedades
    console.log(animals[item])
    // Tipo 4 capturar valores individuais das propriedades de um objeto
    console.log(animals.name)
}

let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName) {
    console.log(arrayName) // Mostrar todo o Array
    console.log(arrayName[item]) // Mostra todos os valores
    console.log(arrayName[2]) // Mostra diretamente um vetor
    console.log(item) // Index dos vetores (Posições)
}