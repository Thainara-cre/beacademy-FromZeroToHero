Algoritmo "exercio3"

Var
saldoInicial: real;
operacao: real;
saldoFinal: real;
valorOperacao: real;

Inicio
   escreva("Digite o saldo incial: ")
   leia(saldoInicial)
   escreval("1 - Saque")
   escreval("2 - Dep?sito")
   escreva("Escolha uma opera??o: ")
   leia(operacao)
   se (operacao = 1) entao
      escreva("Digite o valor do saque: ")
      leia(valorOperacao)
      saldoFinal <- (saldoInicial - valorOperacao)
      escreval("Valor inicial: ", saldoInicial)
      escreval("Valor final: ", saldoFinal)
   senao
         escreva("Digite o valor do Dep?sito: ")
         leia(valorOperacao)
         saldoFinal <- (saldoInicial + valorOperacao)
         escreval("Valor inicial: ", saldoInicial)
         escreval("Valor final: ", saldoFinal)
   fimse

Fimalgoritmo