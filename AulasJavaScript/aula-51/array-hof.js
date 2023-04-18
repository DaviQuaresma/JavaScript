const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//### Map

/* EXEMPLO NO FOR
const nomes = []
for(let i = 0; i < nomes.length; i++){
    nomes.push(personagens[i].nome)
}
   EXEMPLO NO ARRAY*/

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)

// map: permite obter um novo array a partir de um array existenste
//----------------------------------------------------------------------------------------------------------------
//### Filter

/* EXEMPLO NO FOR
const orcs = []

for( let i = 0; i < personagens.length; i++){
    if(personagens[i].raca === "orc"){
        orcs.push(personagens[i])
    }
}
   EXEMPLO NO ARRAY */
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "orc"
})

console.log(orcs)
// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
//----------------------------------------------------------------------------------------------------------------
//### Reduce

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].raca(personagem)
    }else{
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
//----------------------------------------------------------------------------------------------------------------
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})

