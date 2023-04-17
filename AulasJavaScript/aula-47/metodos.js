let pessoa = {
    nome: "Davi",
    idade: 21,
    //Os metodos podem ser referenciados dentro do objetos, e são refernciados como se fossem FUNÇÕES
    dizerOla(){
        console.log("Ola, mundo! Meu nome é " + this.nome)
        //THIS é usado para se referenciar ao NOME só que o que está dentro do objeto, ou seja, THIS(Esse).nome
        
    }
}
//Dentro do contesto do objeto o THIS vai sempre apontar para esse objeto oque voce quer buscar

console.log(dizerOla)

pessoa.dizerOla()