    Callbacks

Trata-se de uma função que será executada quando algum evento acontecer ou quando algum código chegar a um estado esperado. Isto quer dizerque esta função é assíncrona, pois não será executada imediatamente. Neste caso, a aplicação continuará funcionando enquanto a função espera o momento da sua execução.

Ex. uma função a ser executada após um dado ser salvo no banco de dados;
    Uma função que executa após os dados serem retornados de uma chamada à uma API;
    Uma função que será execcutada após o click do usuário em um botão no site.

Na maioria dos casos, uma função calback é passada como argumento de outra função.

function foo(p) {
    retrun p
}

function foo2(callback) {
    callback('p');
}

foo2();