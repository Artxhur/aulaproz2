Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/05/2025
Var
// Seção de Declarações das variáveis 
tabuada, numero, x, y:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite um número para o cálculo da tabuada de 1 até 10:")
leia (numero)
 se (numero < 1) ou ( numero > 10) entao
 escreva ("Número fora do limite!!!")
 senao
 para y de 1 ate 10 faca
 escreval (y, "X", numero, "=", numero * y)
    fimpara
Fimalgoritmo
