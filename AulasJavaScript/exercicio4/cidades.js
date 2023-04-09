const turista = prompt("Qual seu nome? ")
let cidades= ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while(continuar === "Sim"){
    let cidade = prompt("Qual nome da cidade? ")
        cidades += " - " + cidade + "\n"
        contagem++
        continuar = prompt("Já visitou alguma outra cidade? (Sim/Não)")
}
alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)





