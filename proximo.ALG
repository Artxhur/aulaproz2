Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/05/2025
Var
// Seção de Declarações das variáveis 
palpite1, palpite2, dado, dif1, dif2:inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Funcionamento do jogo:")
escreval ("Dois jogadores farão palpites de números entre 0 e 100")
escreval ("Quem acertar o número aleatório ganha")

  escreval ("Palpite do jogador 1:")
     leia (palpite1)
  escreval ("palpite do jogador 2:")
     leia (palpite2)
  escreva("o número sorteado foi:")
 
aleatorio on
leia (dado)
aleatorio off
 dif1 <- abs(palpite1 - dado)
 dif2 <- abs(palpite2 - dado)

   se (dif1 < dif2) entao
      escreval ("jogador 1 acertou e ganhou o jogo.")
 fimse
   se (dif1 > dif2) entao
   escreval ("jogador 2 acertou a ganhou o jogo")
  fimse
  se (dif1 = dif2) entao
   escreval ("Empate!!! Ninguém venceu")
 fimse



 
Fimalgoritmo