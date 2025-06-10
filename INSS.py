def calcular_inss(salario_bruto):
 salariob = float
 if salariob <= 1693.72:
    aliquota = 0.08
 elif salariob <=2822.90:
    aliquota = 0.09
 elif salariob <=5645.80:
    aliquota = 0.11
 else:
    return 5645.80 * 0.11

 return salariob * aliquota

salario = float(input("Digite o salário bruto: R$"))
inss = calcular_inss(salario)
salariol = salario - inss
print(f"Desconto no inss: R${inss:.2f}")
print(f"Salário liquído: R${salariol:.2f}")