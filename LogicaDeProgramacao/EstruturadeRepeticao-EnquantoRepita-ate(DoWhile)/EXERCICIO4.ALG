Algoritmo "exercicio4"

Var
   saldo: REAL
   j: INTEIRO
Inicio
      saldo <- 1000
      j <- -2
      REPITA
            SE ((saldo - 150) <= 0) ENTAO
               j <- -1
               ESCREVAL("SALDO INSUFICIENTE")
            SENAO
                 saldo <- saldo - 150
                 ESCREVAL("NOVO SALDO: ", saldo)
            FIMSE
      ATE j >=  -1
Fimalgoritmo