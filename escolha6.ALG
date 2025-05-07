Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/05/2025
Var
// Seção de Declarações das variáveis 
valor1,valor2:real
opcao:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval ("digite o valor 1 e o valor 2")

leia (valor1,valor2)

escreval("escolha o que você deseja calcular")
escreval ("digite 1 para soma")
escreval ("digite 2 para subtrair")

leia(opcao)

escolha (opcao)
caso 1
escreval ("o resultado da soma é: ",valor1+valor2)

caso 2
escreval ("o resultado da subtração é: ",valor1-valor2)

outrocaso
escreval ("você digitou uma opção inválida")

fimescolha

Fimalgoritmo