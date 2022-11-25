    For / Loop

Utilizado para fazer algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero ++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console

    Immediately invoked function expression ou LIFE

Trata-se de uma função chamada imdediatamente depois de ser declarada. É útil para evitar "poluir" o objeto global.

(function helloWorld(){
    alert('Hello world!');
})();

//Alerta "Hello world!"