// Eventos
// Ações que dependem de outras ações

const submitButton = document.querySelector("#submit-button");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const myForm = document.querySelector("#my-form");
const items = document.querySelector(".items");

submitButton.addEventListener("click", function(event) {

    event.preventDefault() // remove o comportamento padrão de um botão em um input/form
    // console.log(event) // apenas para mostrar os atributos do evento

    // console.log("Clicked!")
        
    const valueName = inputName.value;
    const valueEmail = inputEmail.value;
    
    if( (valueName === "") || (valueEmail === "") ) {

        // Alterando o background e mostrando pop-up caso preenchimento esteja incompleto
        myForm.style.background = "red"
        return alert("Please, fill out all the fields")
    }

    // Alterando o background caso a validação esteja ok
    myForm.style.background = "green"

    items.firstElementChild.textContent = valueName;
    items.children[1].textContent = valueEmail;

})