// Selecionando elementos pelo DOM

// Selecionando apenas um elemento

// Seleção pelo ID (nome conforme o doc html) -> seleciona pela referência ao elemento
const addUserText = document.getElementById("add-user");
console.log(addUserText)

// Com innerText conseguimos alterar o texto da label (Add user -> Adicionar usuário)
addUserText.innerText = 'Adicionar usuário'

// Também podemos selecionar por querySelector (ID, classe ou elemento html) -> retorna o elemento em si
// Usar # para especificar o ID
const addUserText = document.querySelector("#add-user")
console.log(addUserText)

addUserText.textContent = 'Adicionando usuário'

// -------------------------------------------------------------------------------------------------------------

// Selecionando múltiplos elementos

// Seleção pela classe
// Usar . para especificar classe
const allItems = document.querySelectorAll(".item");
console.log(allItems)

// Como o comando é só para classe, não precisa do .
// Retorna HTML Collector -> não é possível usar métodos de lista
const allItems2 = document.getElementsByClassName("item")

// Seleção pela tag html
// Também retorna HTML Collector
const tagName = document.getElementsByTagName("li")
// console.log(tagName)

// -------------------------------------------------------------------------------------------------------------

// Manipulando elementos no DOM

const items = document.querySelector(".items");
console.log(items)

// Remover todos os items da classe
// items.remove()

// Remover apenas um elemento específico da classe
// items.firstElementChild.remove() // remove o primeiro elemento
// items.lastElementChild.remove() // remove o último elemento

// Alterando o texto de um dos elementos
items.children[1].textContent = 'Segundo item'

// Podemos manipular HTML no conteúdo do item
items.children[2].innerHTML = "<h1>Hello World!</h1>"

// Modificando a cor do botão
const button = document.querySelector(".btn");
button.style.background = "red"