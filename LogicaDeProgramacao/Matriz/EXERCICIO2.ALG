Algoritmo "exercicio2"

Var
   planilha: VETOR [1..5, 1..4] DE REAL //vator[ linhas , colunas]
   l, c: INTEIRO //índice 1 para linhas e c para colunas
   somaLinha:  REAL
   somaColuna: REAL
   j: INTEIRO
Inicio
      PARA l <- 1 ATE 4 FACA //laço de cadastro
           somaLinha <- 0
           somaColuna <- 0
           PARA c <- 1 ATE 3 FACA  //laço de cadastro das colunas
               planilha[l, c] <- (l + c)
               somaLinha <- somaLinha + planilha[l, c]
           FIMPARA
           planilha[l, c+1]  <- somaLinha
      FIMPARA
       J <- 1
       PARA l <- 1 ATE 4 FACA //laço de cadastro
           somaColuna <- 0

           PARA c <- 1 ATE 5 FACA  //laço de cadastro das colunas
               somaColuna <- somaColuna + planilha[c, l]
           FIMPARA
           planilha[5, j]  <- somaColuna
           j <- j +1
      FIMPARA
      
      PARA l <- 1 ATE 5 FACA //laço de cadastro
           PARA c <- 1 ATE 4 FACA  //laço de cadastro das colunas

               ESCREVA(" ", planilha[l, c])
           FIMPARA
           ESCREVAL()
      FIMPARA

Fimalgoritmo