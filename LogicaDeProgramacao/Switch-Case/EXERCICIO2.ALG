Algoritmo "exercicio2"
// Disciplina   : [Linguagem e L?gica de Programa??o]
// Professor   : Antonio Carlos Nicolodi 
// Descri??o   : Aqui voc? descreve o que o programa faz! (fun??o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/10/2022
Var
operacao: CARACTERE
resultado: REAL
lado: REAL
area: REAL
base: REAL
altura: REAL
perimetro: REAL
Inicio
      ESCREVA("Digite a operacao: ")
      LEIA(operacao)

      ESCOLHA operacao
              CASO "Q"
                   ESCREVAL("Tamanho do Lado do quadrado? ")
                   LEIA(lado)
                   area <- (lado * lado)
                   ESCREVAL("Area = ", area)
                   perimetro <- (2 * lado) + (2 * lado)
                   ESCREVAL("Perimetro = ", perimetro)
              CASO "T"
                   ESCREVAL("Tamanho da base do triangulo? ")
                   LEIA(base)
                   ESCREVAL("Tamanho da altura do triangulo? ")
                   LEIA(altura)
                   area <- base * altura
                   ESCREVAL("Area = ", area)
                   perimetro <- (2 * base) + (2 * altura)
                   ESCREVAL("Perimetro = ", perimetro)
              OUTROCASO
                   ESCREVA("Opera??o inv?lida! Escolha T - para triangulo ou Q para quadrado")
        FIMESCOLHA
Fimalgoritmo