algoritmo "CalculoMediasAlunos"
var
   nomes: vetor[1..5] de caractere
   av1, av2, medias: vetor[1..5] de real
   i: inteiro
   espacos: inteiro
   nome_formatado: caractere

inicio
   // Entrada de dados
   para i de 1 ate 5 faca
      limpatela
      escreva("Digite os dados do ", i, "º aluno:")
      escreval("")
      escreva("Nome do aluno: ")
      leia(nomes[i])
      escreva("Nota da AV1: ")
      leia(av1[i])
      escreva("Nota da AV2: ")
      leia(av2[i])
      medias[i] <- (av1[i] + av2[i]) / 2
   fimpara

   // Exibição dos resultados (alinhados)
   limpatela
   escreval("RESULTADOS DOS ALUNOS")
   escreval("----------------------------------------")
   escreval("NOME               AV1   AV2  MÉDIA")
   escreval("----------------------------------------")

   para i de 1 ate 5 faca
      // Formata o nome para ocupar exatamente 20 caracteres
      nome_formatado <- nomes[i]
      enquanto compr(nome_formatado) < 20 faca
         nome_formatado <- nome_formatado + " "
      fimenquanto

      // Escreve os dados alinhados
      escreva(nome_formatado)
      escreva(av1[i]:4:1, "  ", av2[i]:4:1, "  ", medias[i]:5:1)
      escreval("")
   fimpara
fimalgoritmo
