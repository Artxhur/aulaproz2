Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/05/2025
Var
// Se��o de Declara��es das vari�veis 
palpite1 :inteiro
palpite2:inteiro
dado:inteiro
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Funcionamento do jogo:")
escreval ("Dois jogadores far�o palpites de n�meros entre 0 e 20")
escreval ("Quem acertar o n�mero aleat�rio ganha")

escreval ("Palpite do jogador 1:")
leia (palpite1)
escreval ("palpite do jogador 2:")
leia (palpite2)
 escreva("o n�mero sorteado foi:")
 
aleatorio on
leia (dado)
aleatorio off


se (dado = palpite1) entao
escreval ("jogador 1 acertou e ganhou o jogo.")
 fimse
se (dado = palpite2) entao
escreval ("jogador 2 acertou a ganhou o jogo")
 fimse
 se (dado <> palpite1) e (dado <> palpite2) entao
 escreval (" ningu�m acertou, tente novamente.")
   fimse
   se (dado = palpite1) e (dado = palpite2) entao
   escreval (" empate")
   fimse



 
Fimalgoritmo