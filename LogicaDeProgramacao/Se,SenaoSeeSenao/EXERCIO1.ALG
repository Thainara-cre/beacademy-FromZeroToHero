Algoritmo "exercio1"

Var
imc: real;
altura: real;
peso: real;

Inicio
      escreva("Digite o seu peso: ")
      leia(peso)
      escreva("Digite a sua altura: ")
      leia(altura)
      imc <- peso/(altura ^ 2)
         se(imc < 19) entao
                escreval("Abaixo do peso")
         senao
              se(imc >= 19) e (imc < 25) entao
                     escreval("Peso normal")
              senao
                     se(imc >= 25) e (imc < 30) entao
                            escreval("Sobrepeso")
                     senao
                     se(imc >= 30) e (imc < 40) entao
                            escreval("Obsedidade Tipo 1")
                          senao
                               escreval("Obesidade Mórbida")
                          fimse
                     fimse
              fimse
            fimse

           


Fimalgoritmo


