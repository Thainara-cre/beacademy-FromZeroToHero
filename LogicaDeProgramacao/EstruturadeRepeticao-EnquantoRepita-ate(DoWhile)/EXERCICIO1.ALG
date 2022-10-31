Algoritmo "exercicio1"

Var
   j: INTEIRO
   nome: CARACTERE
   senha: CARACTERE

Inicio
      ESCREVAL("Digite -1 a qualquer momento pra sair do programa: ")
      j <- 0
      REPITA
            ESCREVAL("Digite a seu nome: ")
            LEIA(nome)
            ESCREVAL("Digite uma senha: ")
            LEIA(senha)
            SE (senha = "1234") E (nome = "Marcos") ENTAO
                ESCREVAL("Bem vindo")
                j <- -3
                INTERROMPA
            FIMSE
            SE (senha = "-1") OU (nome = "-1") ENTAO
               j <- -1
               INTERROMPA
            FIMSE
      ATE j = 0
      SE j = -1 ENTAO
         ESCREVAL("INTERROMPIDO PELO USUÁRIO")
      FIMSE

Fimalgoritmo