const entrada1 = prompt("Informe o primeiro numero: ")
const entrada2 = prompt("Informe o segundo numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const sub = x - y
const mult = x * y
const div = x / y

alert(
    "Resultado:\n" +
    "\nSome: "+ soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + mult +
    "\nDivisão: " + div
)