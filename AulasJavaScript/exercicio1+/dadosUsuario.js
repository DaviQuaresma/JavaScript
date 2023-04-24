alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let name = prompt("Qual seu nome?")
let age = prompt("Qual sua idade?")

const confirmar = confirm("Sua idade é realmente " + name + "?")

if(confirmar){
    alert(
        "Seu nome é" + name +
        "\nSua idade é " + age +
        "\nVocê confirmou sua idade."
        )
}else{
    alert(
        "Seu nome é " + name +
        "\nSua idade é " + age +
        "\nVocê não confirmou sua idade."
        )
}

