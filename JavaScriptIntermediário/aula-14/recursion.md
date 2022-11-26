    Recursion

É o ato de uma função chamar a si mesma. A recursão é bastante usado para resolver problemas que contêm subproblemas menores, dividir um problema complexo em problemas menores, fazer uma contagem regressiva ou contagem até que certo valor seja atingido.
Este tipo de função precisa de uma condição para que ela pare de chamar a si mesmo. Caso contrário entrará em 'looping' infinito.
Porém, a técnica de recursão não é uma boa prática, pois deixa o código complexo de se entender ou muito verboso e de difícil manutenção. É sempre pereferível alternativas mais modernas como por exemplo, o uso de laços de repetição.

function recusive() {
    if (condition) {
        recusive();
    } else {
        // stop calling recurse()
    }
}

    Default parameters

Ao definir parâmetros padrões para umma função, podemos definir valores cado nenhum valor for indefinido.

function say(message = 'Hi') {
    console.log(message);
}

say();
say('Hello');

    Closures

Uma função possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.

let item1 = 1;
function funcao1() {
    let item2 = 2;
    function funcao2() {
        let item3 = 3;
    }
}

// func1, possui acesso à
// item1 e item2

// func2, possui acesso à
// item1, item2, item3