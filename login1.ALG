Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/05/2025
Var
// Se��o de Declara��es das vari�veis 
usuario_cadastro, senha_cadastro : caractere
   usuario_login, senha_login : caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
  // Cadastro do usu�rio
   escreval("=== Tela de Cadastro ===")
   escreva("Cadastre um nome de usu�rio: ")
   leia(usuario_cadastro)
   escreva("Cadastre uma senha: ")
   leia(senha_cadastro)

   limpatela()

   // Tela de login
   escreval("=== Tela de Login ===", "\n")
   escreva("Digite o nome de usu�rio: ")
   leia(usuario_login)
   escreva("Digite a senha: ")
   leia(senha_login)

   limpatela()

   // Verifica��o de login
   se (usuario_login = usuario_cadastro) e (senha_login = senha_cadastro) entao
      escreval("Login realizado com sucesso!")
   senao
      escreval("Usu�rio ou senha incorretos. Tente novamente.")
   fimse

Fimalgoritmo