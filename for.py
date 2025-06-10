while True:
    try:
        numero1 = int(input('Qual vai ser o número inicial? '))
        numero2 = int(input('Qual será o último número? '))
        break
    except ValueError:
        print('Digite apenas números.')
for i in range(numero1,numero2+1):
    print(i,end=', ')
while numero1 > numero2:
    print(numero1,end=', ')
    numero1 = numero1-1
    if numero1 == numero2:
        print(numero1,end=', ')