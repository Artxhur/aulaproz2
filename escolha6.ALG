Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/05/2025
Var
// Se��o de Declara��es das vari�veis 
valor1,valor2:real
opcao:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

escreval ("digite o valor 1 e o valor 2")

leia (valor1,valor2)

escreval("escolha o que voc� deseja calcular")
escreval ("digite 1 para soma")
escreval ("digite 2 para subtrair")

leia(opcao)

escolha (opcao)
caso 1
escreval ("o resultado da soma �: ",valor1+valor2)

caso 2
escreval ("o resultado da subtra��o �: ",valor1-valor2)

outrocaso
escreval ("voc� digitou uma op��o inv�lida")

fimescolha

Fimalgoritmo