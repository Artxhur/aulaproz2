Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2025
Var
// Se��o de Declara��es das vari�veis 
valor1, valor2:real
opcao:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
 escreval("CALCULADORA")
 escreval("------------------------------------")
 escreval ("Digite seus n�meros:")
 leia (valor1, valor2)
 escreval ("escolha uma op��o:")
 escreval ("1- SOMA")
 escreval ("2-SUBTRA��O")
 escreval ("3-MULTIPLICA��O")
 escreval ("4-DIVIS�O")
 
leia (opcao)

escolha (opcao)

 caso 1
 escreval ("O resultado da soma �:", valor1 + valor2)
 

 
 caso 2
 escreval ("O resultado da subtra��o �:", valor1 - valor2)



 caso 3
 escreval ("O resultado da multiplica��o �:", valor1 * valor2)



 caso 4
 escreval ("O resultado da divis�o �:", valor1 / valor2)



 outrocaso
 escreval ("Op��o inv�lida!!!")
 
 fimescolha


Fimalgoritmo