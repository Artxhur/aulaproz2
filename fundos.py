def taxa_fundos(deposito):
    if deposito >= 5:
        return  0.95
    elif deposito >= 4:
            return  0.90
    elif deposito >= 3:
            return  0.85
    elif deposito >= 2:
            return  0.75
    elif deposito >= 1:
            return 0.65
    else:
         return 0.55
            
def tempo_(tempo):
    print("Verificação de taxa")
    
    tempo = float(input("Digite o tempo que os fundos serão mantidos: "))
        
    if tempo < 0:
            print("Tempo inválido.")
            
        
    taxa = taxa_fundos(tempo)
    print (f"Taxa de juros de: {taxa:.2f}")