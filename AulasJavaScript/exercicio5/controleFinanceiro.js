let saldo = prompt("Qual é a quantia de dinheiro inicial?")
let valor = parseFloat(saldo)
let opcao = ""

do{
    opcao = prompt(
"O valor que voçê tem é: R$ "+valor+
"\n1: ADICIONAR DINHEIRO"+
"\n2: REMOVER DINHEIRO"+
"\n3: SAIR"
)

    switch(opcao){
        
        case "1":
            valor += parseFloat( prompt("Qual valor você quer adicionar a conta: ") )
            break
        case "2":
            valor -= prompt("Qual valor você quer remover a conta: ")
            break
        case "3":
            alert("Saindo do programa")
        break
        default:
            alert("Entrada invalida!")
    }

} while(opcao !== 3)

