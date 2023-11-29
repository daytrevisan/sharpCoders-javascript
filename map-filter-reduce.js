// Métodos Map, Filter e Reduce

// Método Map
// Aplica uma alteração a todos os itens do array
// Multiplicar por 2 todos os elementos

const numbers = [2, 7, 19, 36, 44, 102];

const doubleOfNumbers = numbers.map((number) => {
    return number * 2
})

console.log(doubleOfNumbers)

// -----------------------------------------------------------------------------------
// Método Filter
// Filtra um ou mais itens a partir da uma validação (iteração com retorno dos true)
// Ex: Retornar apenas idades pares

const ages = [9, 14, 25, 33, 48, 51, 66];

const evenAges = ages.filter((age) => {
    return age % 2 === 0
})

console.log(evenAges)

// -----------------------------------------------------------------------------------
// Método Reduce
// Reduz o array a apenas um número
// Ex: Retornar a soma das idades

// const ages = [9, 14, 25, 33, 48, 51, 66];

const sumOfAges = ages.reduce((age, accumulator) => {
    return age + accumulator
}, 0)

console.log(sumOfAges)