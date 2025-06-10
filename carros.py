def calcular_taxa_registro(peso, ano):
    if ano <= 1970:
        if peso < 1200:
         return 1, 16.50
    elif peso <=1700:
        return 2, 25.50
    else:
        return 3, 46.50
     elif 1971 <= ano <= 1979:
    if peso < 1200:
        return 4, 27.00
    elif peso <=1700:
        return 5,30.50
    else:
     return 6, 52.50
    else:
    ano >= 1980
    if peso < 3600:
            return 7, 19.50
    else:
            return 8, 52.50
try:
    ano = int(input("Digite o ano do modelo do carro: "))
    peso = float(input("Digite o peso do carro em kg: "))

    classe, taxa = calcular_taxa_registro(ano, peso)
    print(f"Classe do veículo: {classe}")
    print(f"Taxa de registro: R$ {taxa:.2f}")
except ValueError:
    print("Erro: Por favor, digite valores numéricos válidos para ano e peso.")