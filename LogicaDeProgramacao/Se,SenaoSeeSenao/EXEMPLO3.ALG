Algoritmo "exemplo3"

Var
nome: caractere;
salario: real;

Inicio
      escreva("Digite o nome: ")
      leia(nome)
      escreva("Digite o salário: ")
      leia(salario)
      se(salario > 1200) entao
         escreval(nome, " seu Salário é maior que o salário mínimo!!!")
      senao
           se(salario = 1200)
              escreval(nome, " seu Salário é igual ao salário mínimo!!!")
           senao
              escreval(nome, " seu Salário é menor que o salário mínimo!!!")
           fimse
      fimse fimse
Fimalgoritmo