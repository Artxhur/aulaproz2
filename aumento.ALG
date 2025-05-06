Algoritmo "aumento"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/05/2025
Var
// Seção de Declarações das variáveis 
salarioatual, percentualdeaumento, aumento, novosalario:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreva("Digite o salário atual:R$")
 leia(salarioatual)
 escreva("Digite o percentual de aumento (%): ")
 leia (percentualdeaumento)
 
 aumento <- salarioatual * (percentualdeaumento / 100)
 novosalario <- salarioatual + aumento

 escreval ("Valor do aumento: R$",aumento:0:2)
 escreval("Novo salário: R$ ", novosalario:0:2)



Fimalgoritmo