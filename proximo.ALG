Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/05/2025
Var
// Se��o de Declara��es das vari�veis 
palpite1, palpite2, dado, dif1, dif2:inteiro
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Funcionamento do jogo:")
escreval ("Dois jogadores far�o palpites de n�meros entre 0 e 100")
escreval ("Quem acertar o n�mero aleat�rio ganha")

  escreval ("Palpite do jogador 1:")
     leia (palpite1)
  escreval ("palpite do jogador 2:")
     leia (palpite2)
  escreva("o n�mero sorteado foi:")
 
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
   escreval ("Empate!!! Ningu�m venceu")
 fimse



 
Fimalgoritmo