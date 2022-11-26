/* Recursion */

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(10);

function say(message = 'Hi') { 
    console.log(message);
}

say();
say('Hello');

/* Closures */
// escopo léxico é o escopo onde a função foi definida

import {somarNumeros} from './escopo.json';

let x = 10;
const result = somarNumeros()
console.log(result);