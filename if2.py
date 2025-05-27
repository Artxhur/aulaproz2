idade = int(input('Digite sua idade: '))
sexo = input('Digite o sexo M ou F:').lower()

if idade < 18 and sexo =='m':
    print ('Menor de idade - Masculino')

elif idade >= 18 and sexo == 'm':
    print ('Maior de idade - Masculino')

elif idade >= 18 and sexo == 'f':
    print('Menor de idade - Feminino')
    
elif idade >=18 and sexo == 'f':
    print ('Maior de idade - Feminino')

else :
    print('Erro de entrada de dados')