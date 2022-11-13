// Manipulando Strings e Arrays

/*
    Separando um texto que contem espaços, em um novo array onde
    cada texto é uma posição do array
*/

let newPhrase = "Fala meus queridos e queridas 🔥"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)
console.log(typeof phraseToArray)

// Convertendo novamente o texto para String
// .join(" ") -> Permite que gere separações (- , _ , / '')

let phraseModify = phraseToArray.join(" ").toLowerCase()
console.log(phraseModify)

// Manipulando Strings e Arrays
// Verificar se contem palavras ou letras

let stringInclude = "Veem ne nim Paylivre pay pay"
console.log(stringInclude.includes("Paylivre"))

// Objetos

let ArrayInclude = [
    "PayLivre",
    "veem",
    "ne mim",
    "meu amor",
    {
        firtName: "Pay",
        lastName: "Livre"
    }
]

console.log(ArrayInclude.includes("PayLivre"))
console.log(ArrayInclude.includes(ArrayInclude[4].firtName))
// String start with
console.log(stringInclude.startsWith("Veem"))

//String end with
console.log(stringInclude.endsWith("pay"))

// Transformando um Array em Caracteres
let wordToArray =  "Quem ta gostando Hey!! "
console.log(Array.from(wordToArray))
