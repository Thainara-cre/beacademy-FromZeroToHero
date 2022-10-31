Algoritmo "exercicio1"
Var
   matrizQuadrada: VETOR[1..3, 1..3] DE REAL
   i, j: INTEIRO
   diagonalPrincipal: REAL
   diagonalSecundadria: REAL
   
Inicio
      diagonalPrincipal <- 0
      diagonalSecundadria <- 0
      PARA i <- 1 ATE 3 FACA //laço de cadastro
           PARA j <- 1 ATE 3 FACA  //laço de cadastro das colunas
                ESCREVA("Digite o valor da coluna ", i, " na posição ", j, ": ")
                LEIA(matrizQuadrada[i, j])
           FIMPARA
      FIMPARA
      PARA i <- 1 ATE 3 FACA //laço de cadastro
           PARA j <- 1 ATE 3 FACA  //laço de cadastro das colunas
                SE i = j ENTAO
                   diagonalPrincipal <- diagonalPrincipal +  matrizQuadrada[i, j]
                FIMSE
                SE ((i + j) = 4) ENTAO
                   diagonalSecundadria <- diagonalSecundadria + matrizQuadrada[i, j]
                FIMSE
           FIMPARA
      FIMPARA
             ESCREVAL("A soma da diagonal principal = ", diagonalPrincipal)
             ESCREVAL("A soma da diagonal secudaria = ", diagonalSecundadria)

Fimalgoritmo