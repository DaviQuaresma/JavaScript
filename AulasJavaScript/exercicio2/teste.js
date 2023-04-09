const nomeVeiculo1 = prompt("Insira o nome do veiculo: ")
const velocidade1 = prompt("Qual a velocidade do veiculo: ")

const nomeVeiculo2 = prompt("Insira o nome de outro veiculo: ")
const velocidade2 = prompt("Qual a velocidade desse outro veiculo: ")

const speed1 = parseFloat(velocidade1)
const speed2 = parseFloat(velocidade2)

if(speed1 > speed2){
    alert("O "+nomeVeiculo1+" é o carro mais rapido, atingindo uma velocidade de "+speed1+" KM por hora")
}else if(speed2 > speed1){
    alert("O "+nomeVeiculo2+" é o carro mais rapido, atingindo uma velocidade de "+speed2+" KM por hora")
}else if(speed1 == speed2){
    alert("Os veiculos "+nomeVeiculo1+" e "+nomeVeiculo2+" estão atingindo a mesma velocidade, neste caso, de "+speed1+"KM por hora")
}else{
    alert("Informações insuficientes para realizar o calculo!!!")
}