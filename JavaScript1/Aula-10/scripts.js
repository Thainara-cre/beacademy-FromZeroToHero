// Hoisting

digaAMinhaIdade()

function digaAMinhaIdade() { //o hosting só funciona nesse tipo de declaração 
    return console.log(30)
}

// Calback
// executar uma função dentro de outra
function minhaFuncao (callback) {
    console.log(`Início da minha função`)
    callback(15, 15)
    console.log(`Final da minha função`)
}

minhaFuncao (
    (num1, num2) => {
        return console.log(num1 + num2)
    }
)

// Function Construct

function Sum() {
    this.num1,
    this.num2,
    this.calc = function (num1, num2) {
        return total = num1 + num2
    }
}

const math = new Sum()
//console.log(math)
console.log(math.calc(32,32))

const number1 = math.num1 = 30
const number2 = math.num2 = 10
console.log(math.calc(number1, number2))

const data = new Date().getDay()
console.log(data)