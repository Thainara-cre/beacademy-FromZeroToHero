Algoritmo "exemplo2"

Var
   alunos: VETOR [1..3] DE CARACTERE
   notas: VETOR [1..3, 1..2] DE REAL //vator[ linhas , colunas]
   l, c: INTEIRO //índice 1 para linhas e c para colunas

Inicio
      PARA l <- 1 ATE 3 FACA //laço de cadastro
           ESCREVA("Digite o NOME do ", l, "º aluno: ")
           LEIA(alunos[l])
           PARA c <- 1 ATE 2 FACA  //laço de cadastro das colunas
                ESCREVA("Digite a ", c, "ª nota do ", l, "º aluno: ")
                LEIA(notas[l, c])
           FIMPARA
      FIMPARA
      
      ESCREVAL("Dados dos alunos: ")
      PARA l <- 1 ATE 3 FACA //laço de linhas
           ESCREVA("NOME do ", l, "º aluno: ", alunos[l])
           PARA c <- 1 ATE 2 FACA //laço de colunas
                ESCREVA(c, "ª nota: ", notas[l, c])
           FIMPARA
           ESCREVAL()
      FIMPARA


Fimalgoritmo