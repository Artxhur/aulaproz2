Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/05/2025
Var
// Seção de Declarações das variáveis 
 saldo: real
   deposito: real
   saque: real
   emprestimo: real
   opcao: inteiro
   usuario_cadastro, senha_cadastro : caractere
   usuario_login, senha_login : caractere
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 


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
   
   
   saldo <- 0
   emprestimo <- 1000 // valor fixo de empréstimo disponível

   repita
      limpatela()
      escreval("======== BANCO MACRO VISUAG ========")
      escreval("1 - Ver saldo")
      escreval("2 - Ver empréstimo disponível")
      escreval("3 - Depositar")
      escreval("4 - Sacar")
      escreval("5 - Sair")
      escreva("Escolha uma opção: ")
      leia(opcao)

      limpatela()

      escolha opcao
         caso 1
            escreval("Seu saldo atual é: R$ ", saldo:0:2)

         caso 2
            escreval("Seu empréstimo disponível é: R$ ", emprestimo:0:2)
            escreval("Saldo atual: R$ ", saldo:0:2)

         caso 3
            escreva("Digite o valor para depósito: R$ ")
            leia(deposito)
            saldo <- saldo + deposito
            escreval("Depósito realizado com sucesso!")
            escreval("Saldo atual: R$ ", saldo:0:2)

         caso 4
            escreva("Digite o valor para saque: R$ ")
            leia(saque)
            se saque <= saldo entao
               saldo <- saldo - saque
               escreval("Saque realizado com sucesso!")
            senao
               escreval("Saldo insuficiente para saque.")
            fimse
            escreval("Saldo atual: R$ ", saldo:0:2)

         caso 5
            escreval("Saindo do sistema...")

         outrocaso
            escreval("Opção inválida. Tente novamente.")
      fimescolha

      se opcao <> 5 entao
         escreval()
         escreval("Pressione ENTER para continuar...")
         leia(deposito) // apenas para pausar
      fimse

   ate opcao = 5




Fimalgoritmo