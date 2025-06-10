kilow = float(input('Digite o total gasto de energia: '))
preco = float
imposto = float
total = float


preco = 0.12 * kilow
imposto = 0.18 * preco
total = preco + kilow

print ('O preço sem o ICMS é: R$', (preco))
  
  


print (f'O valor total da energia é: R$,{total:.2f}')