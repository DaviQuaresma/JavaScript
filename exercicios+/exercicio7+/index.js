const spaceshipName = prompt("Qual nome da nave?")

var spaceShipSpeed = 0

sapceBoard()

function sapceBoard (){

    do{
     opcao = prompt(
    `
    Bem vindo a ${spaceshipName}, aqui nós vamos passar
    as opções de controle de velocidade, fique a vontade
    para controlar a nave da sua maneira, segue as opções:

    1.ACELERAR A NAVE
    2.REDUZIR SUA VELOCIDADE
    3.MOSTRAR VELOCIDADE ATUAL
    4.SAIR DO MENU
    `
  )

  switch (opcao) {
    case "1":
      spaceShipSpeed = Speed(spaceShipSpeed)
      break;
    case "2":
      spaceShipSpeed = Slow(spaceShipSpeed)
      break;
    case "3":
        Info()
      break;
      case "4":
        alert(`Foi otimo ter voce embarcado na ${spaceshipName}, até a proxima!!!`)
      break;
    default:
      alert("Entrada invalida!");
        } 
    } while (opcao !== "4");
}

function Speed (speed){
  var newSpeed = speed + 5
      return newSpeed
}

function Slow (speed){
    var newSpeed = speed - 5
    if(newSpeed < 0){
      newSpeed = 0 
    }
    return newSpeed
}


function Info (){
    alert(`O nome da nave é ${spaceshipName} e sua velocidade atual é de ${spaceShipSpeed}`)
}