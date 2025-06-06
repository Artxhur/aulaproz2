print("Escreva o 1º número:")
num1 = int(input())
print("Escreva o 2º número:")
num2 = int(input())

print ('Os números entre os números', num1, 'e', num2, 'são:')
for i in range(num1, num2 + 1):
    print(i, end=' ')