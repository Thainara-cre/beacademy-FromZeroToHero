// Type conversion

// Convertendo String para número e número para String
console.log(Number('9') + 24)
console.log(typeof String(9) + ' Converteu diacho!!')


// Contar caracteres
let oneWord = "Moacir"
console.log(oneWord.length)

//Maiúsculas e Minusculas

let phrase = "Olha o bonde da PayLivre uaaaaaauuuuu"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

// Convertendo para inteiro

let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

//Convertendo para decimal
let integerNumber = 24
console.log(parseFloat(integerNumber))

// Trabalhar com casas decimais, números depois da vírgula
let niceNumber = 24.98888883422237463820232
console.log(niceNumber.toFixed())
console.log(niceNumber.toFixed(4))
console.log(niceNumber.toFixed(4).replace('.', ','));

// Precisão númerica

let otherNumber = 129/32
console.log(otherNumber.toPrecision())
console.log(typeof otherNumber.toPrecision())
console.log(Number(otherNumber.toPrecision()))

