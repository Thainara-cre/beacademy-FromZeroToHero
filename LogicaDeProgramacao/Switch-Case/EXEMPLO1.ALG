Algoritmo "exemplo1"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
   numero1, numero2: REAL
   operacao: CARACTERE
   resultado: REAL

Inicio
      ESCREVA("Digite o primeiro número: ")
      LEIA(numero1)
      ESCREVA("Digite a operacao: ")
      LEIA(operacao)
      ESCREVA("Digite o segundo número: ")
      LEIA(numero2)
      ESCOLHA operacao
              CASO "+"
                   resultado := numero1 + numero2
              CASO "-"
                   resultado := numero1 + numero2
              OUTROCASO
                   resultado := -1
      FIMESCOLHA
      SE (resultado=-1) ENTAO
         ESCREVA("Operação inválida! Escolha + ou - ")
      SENAO
           ESCREVA("Resultado: ", resultado)
      FIMSE
Fimalgoritmo