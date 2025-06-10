n1 = int(input("Digite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))
n3 = int(input("Digite o terceiro número: "))
def soma(n1, n2, n3):
    return n1 + n2 + n3
def main():
    resultado = soma(n1, n2, n3)
    print(f"A soma é: {resultado}")
if __name__ == "__main__":
    main()