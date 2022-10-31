Algoritmo "exercio2"

Var
idade : real;


Inicio
      escreva("Digite a sua idade: ")
      leia(idade)
      
      se( idade < 18) entao
          escreva("Menor de idade")
      senao
         se ( (idade > 18) E (idade < 60) )  entao
            escreva("Adulto")
         senao
              escreva("Idoso")
         fimse
      fimse


Fimalgoritmo