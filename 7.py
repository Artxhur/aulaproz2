horas = int(input('Digite as horas trabalhadas na semana: '))
salario = float

if horas <= 40:
    salario = horas * 15
    print(f"Seu salário é: R${salario:.2f}")
else:
    salario = 600 + (horas - 40) * 21
    print(f"O salário semanal é de: R${salario:.2f}")