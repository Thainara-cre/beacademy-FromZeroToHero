Algoritmo "exercicio4"

Var
   operacao: CARACTERE
   saldoInicial: REAL
   saldoFinal: REAL
   bancoNome: CARACTERE
   agencia: INTEIRO
   conta: INTEIRO
   valorOperacao: Real
   repeticoes: INTEIRO
   j: INTEIRO
Inicio
      ESCREVAL("Quantas opera??e voc? deseja realizar?")
      LEIA(repeticoes)
      ESCREVA("Digite o saldo inicial: ")
      LEIA(saldoInicial)
      PARA j de 1 ATE repeticoes FACA
         ESCREVAL("========================================")
         ESCREVAL("1 - Dep?sito")
         ESCREVAL("2 - Saque")
         ESCREVAL("3 - Tranf?rencia")
         ESCREVA("Digite a operacao: ")
         LEIA(operacao)
         ESCOLHA operacao
                 CASO "1"
                      ESCREVAL("Digite o valor a ser depositado: ")
                      LEIA(valorOperacao)
                      saldoFinal <- saldoInicial + valorOperacao
                      ESCREVAL("O saldo final ficou: ", saldoFinal)
                 CASO "2"
                      ESCREVAL("Digite o valor a ser sacado: ")
                      LEIA(valorOperacao)
                      saldoFinal <- saldoInicial - valorOperacao
                      ESCREVAL("O saldo final ficou: ", saldoFinal)
                 CASO "3"
                      ESCREVAL("Digte os dados do banco que ser? efetuado o deposito conforme forem pedidos: ")
                      ESCREVAL("")
                      ESCREVA("Banco: ")
                      LEIA(bancoNome)
                      ESCREVA("Ag?ncia: ")
                      LEIA(agencia)
                      ESCREVA("Conta: ")
                      LEIA(conta)
                      ESCREVA("Valor a ser tranferido: ")
                      LEIA(valorOperacao)
                      ESCREVAL("========================================")
                      ESCREVAL("Valor tranferido com sucesso para a conta com dados a baixo: ")
                      ESCREVAL("Banco: ", bancoNome)
                      ESCREVAL("Ag?ncia: ", agencia)
                      ESCREVAL("Conta: ", conta)
                 OUTROCASO
                      ESCREVA("Opera??o inv?lida! Escolha 1, 2 ou 3")
         FIMESCOLHA
      FIMPARA


Fimalgoritmo