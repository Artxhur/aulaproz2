Algoritmo "aumento"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/05/2025
Var
// Se��o de Declara��es das vari�veis 
salarioatual, percentualdeaumento, aumento, novosalario:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
 escreva("Digite o sal�rio atual:R$")
 leia(salarioatual)
 escreva("Digite o percentual de aumento (%): ")
 leia (percentualdeaumento)
 
 aumento <- salarioatual * (percentualdeaumento / 100)
 novosalario <- salarioatual + aumento

 escreval ("Valor do aumento: R$",aumento:0:2)
 escreval("Novo sal�rio: R$ ", novosalario:0:2)



Fimalgoritmo