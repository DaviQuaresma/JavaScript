function triangulo(){
    base = prompt("Qual valor de base")
    altura = prompt("Qual valor de altura")
    return (base * altura) /2
}
function retangulo(){
    base = prompt("Qual valor de base")
    altura = prompt("Qual valor de altura")
    return base * altura
}
function quadrado(){
    lado = prompt("Qual valor do lado")
    return lado * lado
}
function trapezio(){
    baseMaior = prompt("Qual valor de base Maior?")
    baseMenor = prompt("Qual valor de base Menor?")
    altura = prompt("Qual valor de altura")
    return ((baseMaior + baseMenor) * altura )/2
}
function circulo(){
    raio = prompt("Qual valor do raio?")
    return 3.14 * (raio * raio)
}

function exibirMenu(){
    return prompt(
    "Qual tipo de calculo voce deseja fazer:\n\ "+
    "1: Área do triangulo:\n" +
    "2: Área do retângulo:\n" +
    "3: Área do quadrado:\n" +
    "4: Área do trapézio:\n" +
    "5: Área do círculo:\n" +
    "6: SAIR"
    )
}

function executar(){
    let opcao = ""

do{
    opcao = exibirMenu
    let resultado

switch(opcao){
    case 1:
        resultado = triangulo()
        break
    case 2:
        resultado = retangulo()
        break
    case 3:
        resultado = quadrado()
        break
    case 4:
        resultado = trapezio()
        break
    case 5:
        resultado = circulo()
        break
    case 6:
        alert("Encerrando")
        break
        default:
            alert("Opção invalida!")
        }
}while(opcao !== 6)
}
