const num = prompt(
    "Olá eu sou o robo da tabuada!\n"+
    "Informe um numero quer voce deseja calcular: "
    )
let resultado = ""

for(let fator = 1; fator <= 20 ; fator++){
    resultado += " -> " + num + " * " + fator + " = " + (num * fator) + "\n"
}

alert("Resultado da tabuada de " + num + ":\n\n" + resultado)