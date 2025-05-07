Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/05/2025
Var
// Seção de Declarações das variáveis 
palpite1 :inteiro
palpite2:inteiro
dado:inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Funcionamento do jogo:")
escreval ("Dois jogadores farão palpites de números entre 0 e 20")
escreval ("Quem acertar o número aleatório ganha")

escreval ("Palpite do jogador 1:")
leia (palpite1)
escreval ("palpite do jogador 2:")
leia (palpite2)
 escreva("o número sorteado foi:")
 
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
 escreval (" ninguém acertou, tente novamente.")
   fimse
   se (dado = palpite1) e (dado = palpite2) entao
   escreval (" empate")
   fimse



 
Fimalgoritmo