Algoritmo "exercico2"
// Disciplina   : [Linguagem e L?gica de Programa??o] 
// Professor   : Antonio Carlos Nicolodi 

Var
   j: INTEIRO
   nome: CARACTERE
   senha: CARACTERE


Inicio
      j <- 1
      ENQUANTO j < 2 FACA
               ESCREVAL("Digite o nome do seu usu?rio: ")
               LEIA(nome)
               ESCREVAL("Digite a sua senha: ")
               LEIA(senha)
               SE (senha = "paylivre") E (nome = "marcos")  ENTAO
                  ESCREVAL("BEM - VINDO MARCOS")
                  j <- j+1
               SENAO
                  ESCREVAL("SENHA INCORRETA")
               FIMSE
      FIMENQUANTO



Fimalgoritmo