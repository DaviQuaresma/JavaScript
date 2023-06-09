const imoveis = []
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo(a) ao Cadastro de imoveis!\n" +
    "Total de imoveis: " + imoveis.length +
    "\n1: Salvar um imovel\n2: Mostrar todos os imoveis salvos\n3: Sair"
  );

  switch (opcao) {
    case "1":
        //objeto
        const imovel = {}

        //parametros
    imovel.proprietario = prompt("Informe o nome do proprietario do imovel:")
    imovel.quartos = prompt("Quantos quartos possui o imovel?")
    imovel.banheiros = prompt("Quantos banheiros possui o imovel?")
    imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)")

        //confirmação das informações
        const confirmação = confirm(
            "Salvar este imovel?\n"+
            "\nProprietario" + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui garagem? " + imovel.garagem
        )
        if(confirmação){
            imoveis.push(imovel)
            alert("Imovel salvo com sucesso!")
        }else{
            alert("Voltando ao menu...")
        }
      break;
    case "2":
        for (let i = 0; i < imoveis.length; i++){
            alert(
                "Imovel " + (i + 1) +
                "\nProprietario: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui garagem?: " + imoveis[i].garagem
            )
        }
      break;
    case "3":
      break;
    default:
      alert("Entrada invalida!");
  }
} while (opcao !== "3");
