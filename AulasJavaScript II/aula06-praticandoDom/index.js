function addContact() {
    const contactSection = document.getElementById('contacts-list')
  
    const h3 = document.createElement('h3')
    h3.innerText = "Contato"
    const ul = document.createElement('ul')
    
  //criando campo de nome
    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

  //criando campo de numero
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

  //criando campo de endereço
    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

  //append() cria varios elementos por vez
    contactSection.append(h3, ul)
  }
  
  //remover o ultimo contato adicionado
  function removeContact() {
    const contactSection = document.getElementById('contacts-list')
  
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
  }