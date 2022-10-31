Algoritmo "exercicio2"

Var
   alunos: VETOR[1..3] DE CARACTERE
   medias: VETOR[1..3] DE REAL
   nota1: VETOR[1..3] DE REAL
   nota2: VETOR[1..3] DE REAL
   i: INTEIRO // indice do vetor

Inicio
      PARA i <- 1 ATE 3 FACA //laço de cadastro
           ESCREVA("Digite o nome do ", i, "º aluno: ")
           LEIA(alunos[i])
           ESCREVA("Digite a 1º nota do ", i, "º aluno: ")
           LEIA(nota1[i])
           ESCREVA("Digite a 2º nota do ", i, "º aluno: ")
           LEIA(nota2[i])
           medias[i] <- ((nota1[i] + nota2[i]) / 2)
      FIMPARA
      PARA i <- 1 ATE 3 FACA //laço de impresão
           SE medias[i] >= 6.0 ENTAO
              ESCREVAL("O aluno ", alunos[i], " foi aprovado ")
           SENAO
                ESCREVAL("O aluno ", alunos[i], " foi reprovado ")
           FIMSE
      FIMPARA

Fimalgoritmo