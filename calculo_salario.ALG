Algoritmo "calculo_salario"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/05/2025
Var
// Se��o de Declara��es das vari�veis 
salario:real
horas:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva ("Digite o n�mero de horas trabalhadas na semana:")
  leia (horas)

  se horas < 40 entao
  salario <- horas * 15
  senao
   salario <- 600 + (horas - 40) * 21
    fimse
escreva ("O sal�rio semanal � de :R$", salario:0:2)


Fimalgoritmo