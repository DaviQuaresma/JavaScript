function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) //somar(3, 5)
    return resultado
}

function somar(x, y){
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function(x, y){
    console.log("Realizando uma subtração.")
    return x - y
}))

//Exemplo da vida real
function exibitElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

// exemplo com forEach
const lista = ["Maça","Banana","Laranja","Limão"]

for(let i = 0; i < lista.length; i++){
    exibitElemento(lista[i], i, lista)
}

lista.forEach(exibitElemento)

//exemplo com função anonima
lista.forEach( function( elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})