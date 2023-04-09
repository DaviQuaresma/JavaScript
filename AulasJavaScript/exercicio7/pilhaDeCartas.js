let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1: ADICIONAR UMA CARTA" +
      "\n2: MOSTRAR CARTA DO TOPO" +
      "\n3: SAIR"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("Voçê puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo do programa");
      break;
    default:
      alert("Entrada invalida!");
  }
} while (opcao !== "3");
