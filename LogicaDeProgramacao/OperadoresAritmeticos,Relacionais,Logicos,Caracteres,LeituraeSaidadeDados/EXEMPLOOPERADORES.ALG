Algoritmo "ExemploOperadores"

Var
nome : caractere;
salario : REAL;

Inicio
      escreva("Digite o nome : ")
      leia(nome)
      escreval(nome + " Montreiro ")
      escreval("Digite o salário: ")
      leia(salario)
      escreval("Salário : ", salario)
      escreval("Salário menor que o mínimo: ", (salario < 1200))
      escreval("Salário maior que o mínimo: ", (salario > 1200))
      escreval("Salário diferente o mínimo: ", (salario <> 1200))
      escreval("Salário igual ao mínimo: ", (salario = 1200))
      escreval("Resto da divisão de 5 por 2: ", (5%2))
      escreval("Salário é maior que o mínimo e menor que 5000:", ((salario > 1200) E (salario < 5000)))
Fimalgoritmo