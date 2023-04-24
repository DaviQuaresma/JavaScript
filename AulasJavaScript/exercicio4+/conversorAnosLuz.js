let ly = prompt("Qual distancia em anos luz?")

let chosenOption = prompt(
    "Qual a opção desejada:\n\n" +
    "1. conversão em Parsec(PC)" +
    "\n2. Unidade astronomica(AU)" +
    "\n3. Quilometros(KM)"
    )

let convertedDistance = ""
let chosenUnity = ""

switch(chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = ly * 0.30660155
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = ly * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = ly * 9.5 * Math.pow(10, 12)
        break
    default:
        alert("Opção invalida!")
        break
}

alert("Distancia em anos luz: " + ly + "\n" + chosenUnity + ": " + convertedDistance)