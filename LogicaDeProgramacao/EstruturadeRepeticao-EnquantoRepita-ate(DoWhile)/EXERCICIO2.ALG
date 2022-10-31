Algoritmo "exercicio2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/10/2022
Var
   j: INTEIRO
   idade: INTEIRO
   idadeMaisDe60: INTEIRO
   idadeMenosDe18: INTEIRO

Inicio
      idadeMaisDe60 <- 0
      idadeMenosDe18 <- 0
      j <- 1
      REPITA
            ESCREVAL("Digite uma idade: ")
            LEIA(idade)
            SE (idade = -99) ENTAO
                INTERROMPA
            FIMSE
            SE (idade > 60) ENTAO
               idadeMaisDe60 <- idadeMaisDe60 + 1
            FIMSE
            SE (idade < 18) ENTAO
                idadeMenosDe18 <- idadeMenosDe18 + 1
            FIMSE
      ATE j = 0

          ESCREVAL("Total de pessoas com menos de 18: ", idadeMenosDe18)
          ESCREVAL("Total de pessoas com mais de 60: ", idadeMaisDe60)

Fimalgoritmo