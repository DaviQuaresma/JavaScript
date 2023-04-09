//ATACANTE
const atacante = prompt("Qual nome do atacante?")
const ataque= prompt("Quanto de poder seu personagem tem?")

//DEFENSOR
const defensor = prompt("Qual nome do defensor?")
let vida = prompt("Quantos pontos de vida seu personagem tem?")
const defesa = prompt("Qual seu poder de defesa?")
const possuiEscudo = prompt("Quanto ele tem de escudo? (Sim/Não)")

let dano = 0

if(ataque > defesa && possuiEscudo === "Não"){
    dano = ataque - defesa
}else if(ataque > defesa && possuiEscudo === "Sim"){
    dano = (ataque - defesa) / 2
}else if(ataque <= defesa){
    dano = 0
}

vida -= dano

alert(atacante + "causou " + dano + " pontos de dano em " + defensor)

alert(
    atacante + "\nPoder de Ataque: " + ataque + "\n\n" +
    defensor + "\nPontos de vida: " + vida + 
    "\nPoder de defesa: " + defesa + "\nPossui escudo: " + possuiEscudo
)