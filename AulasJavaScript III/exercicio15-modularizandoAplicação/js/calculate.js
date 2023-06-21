export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    //Muito cuidado com EVAL, ele executa qualquer coisa que seja colocada no campo, se for colocado um codigo malicioso
    //ele vai executar.
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
  }