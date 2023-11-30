// Loop in JS

// FOR

const cars = ['Ferrari', 'Tesla', 'Mercedes']

// for(let i=0; i<cars.length; i++) {
//     console.log(cars[i])
// }

// Outra forma de FOR com Let Of -> outra forma de percorrer uma lista 

for(let car of cars) {
    console.log(car)
}

// Loop com método FOREACH -> chamar o array primeiro

cars.forEach((car) => {
    console.log(car)
})

// Com FOR EACH, há opção para incluir index

cars.forEach((car, index) => {
    console.log(index, car)
})

// WHILE

let index = 0;

while (index < 10) {
    console.log(index);
    index++
}

// FOR IN -> loop nas propriedades do objeto

const person = {
    name: 'Jane',
    age: 21
}

for(property in person) {
    console.log(property);
    console.log(person[property])
}