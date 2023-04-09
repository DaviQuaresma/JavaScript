const nome = prompt("Insira o seu nome: ")
const sobrenome = prompt("Insira o seu sobrenome: ")
const campoDeEstudo = prompt("Insira o sua area de estudo: ")
const ano = prompt("Insira o sua idade: ")

alert(
    "Recruta Cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (2023 - ano)
)
