const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin","Padme"]
}

//Exemplos que fazem a mesma coisa porém de formas diferentes:
const name = person.name

const {job} = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father, mother)

//Forma de fazer sem desestruturação
function createUser(person){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

//Forma de fazer com desestruturação
function createUser({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name,
        job,
        parents
    }
}

//Destruturação é uma boa pratica e muito usada no mercado, é bom acustumar com ela