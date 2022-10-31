Algoritmo "exercicio3"

tipo
    cliente = registro
              nome: CARACTERE
              cpf: INTEIRO
              rg: CARACTERE
              dereco: CARACTERE
              telefone: INTEIRO

    fimregistro

Var
   clientes: VETOR[1..5] DE cliente
   aux: INTEIRO // indice do vetor

Inicio
      PARA aux <- 1 ATE 5 FACA //laço de cadastro
           ESCREVA("Digite o nome do ", aux, "º usuario: ")
           LEIA(clientes[aux].nome)
           ESCREVA("Digite o CPF do ", aux, "º usuario: ")
           LEIA(clientes[aux].cpf)
           ESCREVA("Digite o RG do ", aux, "º usuario: ")
           LEIA(clientes[aux].rg)
           ESCREVA("Digite o endereço do ", aux, "º usuario: ")
           LEIA(clientes[aux].dereco)
           ESCREVA("Digite o telefone do ", aux, "º usuario: ")
           LEIA(clientes[aux].telefone)
      FIMPARA
      PARA aux <- 1 ATE 5 FACA //laço de impresão
           ESCREVAL("=========================================")
           ESCREVAL(aux , "º cliente")
           ESCREVAL("nome: ", clientes[aux].nome)
           ESCREVAL("CPF: ", clientes[aux].cpf)
           ESCREVAL("RG: ", clientes[aux].rg)
           ESCREVAL("Endereço: ", clientes[aux].dereco)
           ESCREVAL("Telefone: ", clientes[aux].telefone)
      FIMPARA

Fimalgoritmo