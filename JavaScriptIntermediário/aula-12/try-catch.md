    Try/catch

Ao executar o código JavaScript, diferentes erros podem ocorrer. Podem ser erros de codificação do programador, erros devido a requisição de dados e outras coisas imprevisíveis como queda de um servidor ou de uma rede em se tratando de uma promise. Estes erros podem ser tratados com as palavras a seguir:
Try - determina um bloco de código que será executado na promise;
Catch - determina um bloco de código no qual os erros serão tratados
Finally - determina um bloco de código que será executado qualquer que seja o resultado da promise;
Throw - define um erro customizado.

    Níveis de try/catch

Utilizando o objeto Error 
O construtor Error() cria um objeto de erro.
Podemos utilizar Error() ou new Error()
A declaração thrown lança uma exceção previamente definida. A execução da função será interrompida e as instruções após o throw não serão executadas.
Também podemos customizar o erro instanciando uma classe a ser chamada toda vez que um erro acontecer na aplicação.
Não é uma boa prática

try {
    // do something
} catch (Exception e) {
    try {
        // do something in the same line, but being less ambitious
    } catch (Exception ex) {
        try {
            // Do the minimum acceptable 
        } catch (Exception e1) {
            // More try catches?
        }
    }
}