// IF AND ELSE
// SE E SE NÃO

let num = 10
let num2 = 20
let admin = false
// > < == === != !==
// && (AND) || (OR) ! (NOT) 
if(num > 5) {
    console.log('Sou maior que 5')
} else {
    console.log('Não sou maior que 5')
}

if(num >= 10 || num2 <= 10) {
    console.log('VERDADE')
} else {
    console.log('FALSA')
}

if(!admin) {
    console.log('Ele é admin!')
} else {
    console.log('Ele é admin tem permisão')
}

if(admin) {
    console.log('Ele é admin tem permisão')   
} else {
    console.log('Ele é admin!')
}

if (num < 10) {
    console.log('Sou maior')
} else if(num >= 10 && num2 <= 20) {
    console.log('Segunda resposta verdade')
} else {
    console.log('Resposta falsa')
}

// SWITCH

let myexpression = 'x'

switch (myexpression) {
    case 'a':
        console.log('Apertou A')
        break
    case 'b':
        console.log('Apertou B')
        break
    case 'c':
        console.log('Apertou C')
        break
    default:
        console.log('Você apertou outra tecla ', myexpression)
        break
}

// Calculadora

function calc (num1, operator, num2) {
    let result

    switch(operator) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            console.log('Não entendi')
            break
    }
    return result
}

console.log(calc(4, '*', 4))