function register(ev){
    console.log(ev)
    //acessando evento e pegando alvo do evento e o parentNode dele(o nó pai)
    const sectionElement = ev.currentTarget.parentNode
    //após pegar o nó pai, comecei a trabalhar com os filhos
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuario ' + username + ' registrado!')
    }else{
        alert('As senhas não conferem!')
    }
}

const button = document.getElementById('register-button')

//Permite que adicione os eventos
button.addEventListener('click', register)
//Conseguimos tambem remover eventos utilizando o remove event listener
function removeListener(){
    button.removeEventListener('click', register)
    alert('Event removed')
}
//Conseguimos tambem adicionar mais de um evento ao mesmo tempo em um mesmo elemento
button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget)
})