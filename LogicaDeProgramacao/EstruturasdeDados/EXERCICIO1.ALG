Algoritmo "exercicio1"

Var
   produto: VETOR[1..10] DE CARACTERE
   preco: VETOR[1..10] DE REAL
   i: INTEIRO // indice do vetor

Inicio
      PARA i <- 1 ATE 10 FACA //laço de cadastro
           ESCREVA("Digite o nome do ", i, "º produto: ")
           LEIA(produto[i])
           ESCREVA("Digite o preço do ", i, "º produto: ")
           LEIA(preco[i])
      FIMPARA
      PARA i <- 1 ATE 10 FACA //laço de impresão
           ESCREVAL("Nome do produto: ",produto[i], " Preço :  R$", preco[i])
      FIMPARA

Fimalgoritmo