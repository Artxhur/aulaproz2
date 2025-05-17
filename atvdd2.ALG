Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/05/2025
Var
// Seção de Declarações das variáveis 
user_cadas, senha_cadas:caracter
user_login, senha_login:caracter
saldo:real
deposito:real
saque:real
emprestimo:real
opcao:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreval("------TELA DE CADASTRO------")
 escreval("Digite seu usuário")
 leia (user_cadas)
 escreval ("Digite sua senha")
 leia (senha_cadas)
 repita
 limpatela()
  escreval("------TELA DE LOGIN------")
  escreval("Digite o usuáro cadastrado")

  leia (user_login)
  escreval ("Digite a sua senha")
  leia (senha_login)

   //verificaçao de login
   se ( user_cadas <> user_login) e (senha_cadas <> senha_login) entao
   escreval ("Dados incorretos. Tente novamente!")
   escreval ("Pressione ENTER para tentar novamente")
   leia(user_login)
   fimse
   ate (user_cadas = user_login) e (senha_cadas = senha_login)
    
    escreval("Obrigado  ", user_cadas, " volte sempre:)")

   
   saldo <- 0
   emprestimo <- 1000
   limpatela()

   escreval ("MENU")
     escreval("1 - Ver saldo")
      escreval("2 - Ver empréstimo disponível")
      escreval("3 - Depositar")
      escreval("4 - Sacar")
      escreval("5 - Sair")
      repita
      escreva("Escolha uma opção: ")
      leia(opcao)

      escolha opcao

      caso 1
       escreval("Seu saldo atual é: R$", saldo:0:2)

      caso 2
       escreval ("Seu empréstimo disponível é: R$", emprestimo:0:2)
       escreval ("Saldo atual: R$", saldo:0:2)

      caso 3
       escreval ("Digite o valor para depósito: R$")
       leia (deposito)
       saldo <- saldo + deposito
       escreval ("Depósito realizado com sucesso")
       escreval ("Saldo atual: R$", saldo:0:2)
       
       caso 4
        escreval ("Digite o valor para saque: R$", saque:0:2)
        leia (saque)
        se saque <= saldo entao
        saldo <- saldo - saque
        escreval ("Saque realizado com sucesso!")
        senao
        escreval ("Saldo insuficiente")
        fimse

        caso 5
        escreval(" Saindo do sistema ...")

        outrocaso
        escreval ("Opção inválida. Tente novamente.")
          fimescolha

          se opcao <> 5 entao
          escreval()
          escreval ("Pressione ENTER Para continuar...")
          leia (deposito) // para parar


          fimse

          ate opcao = 5
   
   

Fimalgoritmo