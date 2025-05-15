Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/05/2025
Var
// Seção de Declarações das variáveis 
usuario_cadastro, senha_cadastro : caractere
   usuario_login, senha_login : caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  // Cadastro do usuário
   escreval("=== Tela de Cadastro ===")
   escreva("Cadastre um nome de usuário: ")
   leia(usuario_cadastro)
   escreva("Cadastre uma senha: ")
   leia(senha_cadastro)

   limpatela()

   // Tela de login
   escreval("=== Tela de Login ===", "\n")
   escreva("Digite o nome de usuário: ")
   leia(usuario_login)
   escreva("Digite a senha: ")
   leia(senha_login)

   limpatela()

   // Verificação de login
   se (usuario_login = usuario_cadastro) e (senha_login = senha_cadastro) entao
      escreval("Login realizado com sucesso!")
   senao
      escreval("Usuário ou senha incorretos. Tente novamente.")
   fimse

Fimalgoritmo