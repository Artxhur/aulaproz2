Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2025
Var
// Seção de Declarações das variáveis 
valor1, valor2:real
opcao:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreval("CALCULADORA")
 escreval("------------------------------------")
 escreval ("Digite seus números:")
 leia (valor1, valor2)
 escreval ("escolha uma opção:")
 escreval ("1- SOMA")
 escreval ("2-SUBTRAÇÃO")
 escreval ("3-MULTIPLICAÇÃO")
 escreval ("4-DIVISÃO")
 
leia (opcao)

escolha (opcao)

 caso 1
 escreval ("O resultado da soma é:", valor1 + valor2)
 

 
 caso 2
 escreval ("O resultado da subtração é:", valor1 - valor2)



 caso 3
 escreval ("O resultado da multiplicação é:", valor1 * valor2)



 caso 4
 escreval ("O resultado da divisão é:", valor1 / valor2)



 outrocaso
 escreval ("Opção inválida!!!")
 
 fimescolha


Fimalgoritmo