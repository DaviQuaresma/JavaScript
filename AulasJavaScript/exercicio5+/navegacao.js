let spaceshipName = prompt("Qual é o nome da nave?")
let dobra = ""
let option = ""

while(option !== "2"){
    option = prompt(
        "Você deseja entrar em dobra?\n" +
        "1 - Sim\n" +
        "2 - Não"
    )
    if(option === "1"){
        alert("Contato mais uma dobra!")
        dobra ++

        alert(
            "O nome da nave é " + spaceshipName +
            "\nA nave fez " + dobra + " dobras até agora"
        )
    }else{
        alert("Status da nave será exibido...")
    }
    
}

alert("A nave " + spaceshipName + " fez " + dobra + " dobras ao total.")