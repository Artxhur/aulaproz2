Algoritmo "salario_semanal"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/05/2025
Var
// Seção de Declarações das variáveis 
salario:real
horas:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite as horas trabalhadas na semana:")
  leia (horas)
    se salario < 40 entao
    salario <- (horas * 15)
    senao
    salario <- 600 + (horas - 40) * 21
     fimse


    escreva ("O salàrio semanal é: R$", salario:0:2)

Fimalgoritmo

