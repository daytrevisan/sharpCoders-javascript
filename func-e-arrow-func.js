// Function e Arrow Function

// FUNCTION

// Valores por parâmetros diretos

function sum(a,b) {
    return a + b
}
console.log(sum(2,2))

// Valores atribuídos à variável

const sumValue = sum(2,5)
console.log(sumValue)

// Valor padrão no caso de não informado

function sum2(a, b = 10) {
    return a + b
}
console.log(sum2(3))

// Se passo valor de b, desconsidera o valor 'default'
console.log(sum2(3,9))

// -------------------------------------------------------------------------------------------------------------

// ARROW FUNCTION

const sumArrow = (a, b = 15) => {
    return a + b
}
console.log(sumArrow(2))

// Como temos apenas um return, podemos reescrever a arrow function

const newSumArrow = (a, b = 25) => a + b

console.log(newSumArrow(1))