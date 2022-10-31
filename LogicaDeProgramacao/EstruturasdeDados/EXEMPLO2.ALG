Algoritmo "exemplo2"

Var
   alunos: VETOR[1..3] DE CARACTERE
   notas: VETOR[1..3] DE REAL
   i: INTEIRO // indice do vetor

Inicio
      PARA i <- 1 ATE 3 FACA //laço de cadastro
           ESCREVA("Digite o nome do ", i, "º aluno: ")
           LEIA(alunos[i])
           ESCREVA("Digite a nota do ", i, "º aluno: ")
           LEIA(notas[i])
      FIMPARA
      PARA i <- 1 ATE 3 FACA //laço de impresão
           ESCREVAL(alunos[i], " obteve a nota: ", notas[i])
      FIMPARA

Fimalgoritmo