Algoritmo "calculo_salario"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/05/2025
Var
// Seção de Declarações das variáveis 
salario:real
horas:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva ("Digite o número de horas trabalhadas na semana:")
  leia (horas)

  se horas < 40 entao
  salario <- horas * 15
  senao
   salario <- 600 + (horas - 40) * 21
    fimse
escreva ("O salário semanal é de :R$", salario:0:2)


Fimalgoritmo