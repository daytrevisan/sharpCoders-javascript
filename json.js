// JSON
// Manipulação para comunicação com servidor

const toDos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false
    },
    
    {
        id: 2,
        description: 'Caminhar com o cachorro',
        isCompleted: true
    },
    
    {
        id: 3,
        description: 'Ler um capítulo',
        isCompleted: false
    }
]

// Ao mandar um objeto para API/servidor, é necessário converter o objeto para JSON (lido como string)

const toDosJSON = JSON.stringify(toDos);
console.log(toDosJSON)

// Ao receber um objeto de API/servidor, é necessário converter para lista (de objetos)

const toDosList = JSON.parse(toDosJSON);
console.log(toDosList)