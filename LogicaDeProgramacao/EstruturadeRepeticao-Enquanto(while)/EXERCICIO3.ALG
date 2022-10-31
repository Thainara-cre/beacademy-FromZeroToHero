Algoritmo "exercicio3"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/10/2022
Var
   numero1: REAL
   numero2: REAL
   continua: INTEIRO
   j: INTEIRO

Inicio
      j <- 1
      ENQUANTO j < 2 FACA
               ESCREVAL("Digite o primeiro numero: ")
               LEIA(numero1)
               ESCREVAL("Digite o segundo numero: ")
               LEIA(numero2)
               ESCREVAL("=================================")
               ESCREVAL("=================================")
               ESCREVAL("Digite 1 se deseja continuar e 2 se deseja sair do sistema: ")
               LEIA(continua)
               SE (continua = 1) ENTAO
                  j <- j+1
               FIMSE
               ESCREVAL("=================================")
      FIMENQUANTO


Fimalgoritmo