O javaScript permite ter comportamentos síncrono e assíncrono.

Síncrono: Espera a tarefa acabar para continuar com a próxima.
Assíncrono: Parte para a próxima tarefa antes da anterior terminar. A tarefa será executada e quando terminada será executada e quando terminada será colocada em fila.
Com o comportamento asssíncrono, é possível carregar um site ou executar uma aplicação enquanto alguma tarefa ainda não terminou. Esta continua sendo "executada por baixo dos panos", enquanto que as outras não ficam travadas esperando ela terminar.

As funções no JavaScript são executadas na sequência em que são chamadas. Não na sequência em que são definidas.

function myFirst(){
    myDisplay("Hello");
}

function mySecond(){
    myDisplay("Goodbye");
}

mySecond();
myFirst();

O objeto promisse representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
Estados de uma promissse:
Pending: estado inicial ou pendente.
fulfiled ou resolved: operação concluída com sucesso.
rejected: operção falhou.

Promise é uma função construtora, e por isso, é um objeto que permite modelar o comportamento assíncrono do JavaScript. Ela instancia "promessas", ou seja, tarefas que podem levar um tempo maior para terminar em relação a outras.
    - Temos que receber dados de alguma API;
    - Uma API precisa receber dados de outra API;
    - Uma API faz uma requisição a um banco de dados;

Enquanto não temos as respostas para estas reequisições, nosso software não precisa ter seu funcionamento travado. Nestes casos, temoos uma promessa de que os dados requisitados chegarão.

then()
As promises têm um método chamado .then(). Ele permite que se realize alguma tarefa após a promisse ser resolvida e invocado quando a função for resolvida.

Reject()
Caso a Promise não seja resolvida por algum motivo, será invocado o método reject.

Finally()
Será invocado independente do resultado da Promise.

Fetch()
É um método que retorna uma Promise.

Exemplo:
function getUser(userId) {
    const user = fetch(url da api)
    .then(response => response.json())
    .then(data => console.log(data))
}

Promise.all()
Utilizado quando há várias promessas que devem ser resolvidas
const endpoints = [
    "https://api.com/api/user/1",
    "https://api.com/api/user/2",
    "https://api.com/api/user/3",
    "https://api.com/api/user/4"
]
const promises = endpoints.map(url => fetch(url).then(res => res.json()))
Primise.all(promises)
.then(body => console.log(body.name))