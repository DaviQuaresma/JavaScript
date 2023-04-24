let pilotName = prompt("Qual seu nome piloto?")
let velocity = ""

velocity = prompt("Qual velocidade voce quer acelerar?")

let confirmation = confirm(
    "A nave está indo para " +velocity+ "km/s."+
    "\n\nPor favor confirme está velocidade.")

if(confirmation){
    if(velocity <= 0 ){
        alert("A nave está parada. Considere partir e aumentar a velocidade.")
    }else if(velocity < 40){
        alert("Você está devagar, podemos aumentar mais")
    }else if(velocity >= 40 && velocity < 80){
        alert("Parece uma boa velocidade para manter")
    }else if(velocity >= 80 && velocity < 100){
        alert("Velocidade alta. Considere diminuir.")
    }else if(velocity >= 100){
        alert("Velocidade perigosa. Controle automatico forçado.")
    }
}else{
    alert("Velocidade não confirmada, nave se mantem parada...")
}