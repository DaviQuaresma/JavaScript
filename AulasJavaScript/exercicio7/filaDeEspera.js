let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "* - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Estes são os pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n" +
      "1. Novo paciente\n" +
      "2. Consultar paciente\n" +
      "3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual nome do novo paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila.");
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcao !== "3");
