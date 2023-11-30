// Condicionais

// Avaliando apenas uma condição

const sum = 7;

if(sum === 2) {
    console.log('sum is 2!')
} else {
    console.log('sum is not 2!')
}

// Usando operadores lógicos

const sum1 = 3;
const sum2 = 5;

if((sum1 === 3) && (sum2 === 7)) {
    console.log('sum1 is 3 and sum2 is 5')
} else {
    console.log('both conditions are not satisfied at the same time')
}

if((sum1 === 3) || (sum2 === 0)) {
    console.log('OR sum1 is 7 OR sum2 is 10')
} else {
    console.log('none of both conditions were not satisfied')
}

// Operador Ternário

let number = sum === 20 ? console.log('sum is 20!') : console.log('sum is not 20!')

// Switch

switch(sum) {
    case 2: console.log('sum is 2!'); break;
    case 5: console.log('sum is 5!'); break;
    case 10: console.log('sum is 10!'); break;
    default: console.log('undefined sum value')
}