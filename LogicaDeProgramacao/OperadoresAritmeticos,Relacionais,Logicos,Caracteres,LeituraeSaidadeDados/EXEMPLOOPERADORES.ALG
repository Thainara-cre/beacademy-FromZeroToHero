Algoritmo "ExemploOperadores"

Var
nome : caractere;
salario : REAL;

Inicio
      escreva("Digite o nome : ")
      leia(nome)
      escreval(nome + " Montreiro ")
      escreval("Digite o sal?rio: ")
      leia(salario)
      escreval("Sal?rio : ", salario)
      escreval("Sal?rio menor que o m?nimo: ", (salario < 1200))
      escreval("Sal?rio maior que o m?nimo: ", (salario > 1200))
      escreval("Sal?rio diferente o m?nimo: ", (salario <> 1200))
      escreval("Sal?rio igual ao m?nimo: ", (salario = 1200))
      escreval("Resto da divis?o de 5 por 2: ", (5%2))
      escreval("Sal?rio ? maior que o m?nimo e menor que 5000:", ((salario > 1200) E (salario < 5000)))
Fimalgoritmo