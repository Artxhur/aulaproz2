Algoritmo "salario_semanal"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/05/2025
Var
// Se��o de Declara��es das vari�veis 
salario:real
horas:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite as horas trabalhadas na semana:")
  leia (horas)
    se salario < 40 entao
    salario <- (horas * 15)
    senao
    salario <- 600 + (horas - 40) * 21
     fimse


    escreva ("O sal�rio semanal �: R$", salario:0:2)

Fimalgoritmo

