let olderPersonName = prompt("Qual é o seu nome senhor(a) ?")
let olderPersonAge = prompt("Qual é a sua idade senhor(a) ?")
let youngPersonName = prompt("Qual é o seu nome jovem ?")
let youngPersonAge = prompt("Qual é a sua idade jovem ?")

let ageDif = (olderPersonAge - youngPersonAge)

alert(
    "O nome da pessoa mais velha é " + olderPersonName +
    "\nO nome da pessoa mais nova é " + youngPersonName +
    "\nA diferença de idade entre eles é de " + ageDif + "anos."
)