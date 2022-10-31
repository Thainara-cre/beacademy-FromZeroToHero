Algoritmo "exemplo1"

Var
   alunos: VETOR[1..5] DE CARACTERE
   i: INTEIRO // indice do vetor

Inicio
      PARA i <- 1 ATE 5 FACA //laço de cadastro
           ESCREVA("Digite o nome do ", i, "º aluno: ")
           LEIA(alunos[i])
      FIMPARA
      PARA i <- 1 ATE 5 FACA //laço de impresão
           ESCREVAL("Nome do ", i, "º aluno: ", alunos[i])
      FIMPARA

Fimalgoritmo