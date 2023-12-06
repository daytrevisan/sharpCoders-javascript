// Objetos em Javascript
// Destructuring Assignment

let person = {
    firstName: 'Livia',
    lastName: 'Santos',
    age: 29,
    hobbies: ['Ler', 'Caminhar', 'Cozinhar']
}

/*
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);

const read = person.hobbies[2];
console.log(read)
*/

// Reescrevendo com destructuring

// const { firstName, lastName, age, hobbies } = person;
// console.log(person);

// É possível renomear os campos do objeto

const { firstName: primeiroNome, lastName: ultimoNome, age: idade, hobbies: atividades } = person;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(atividades);

// Adicionando nova propriedade isolada

person.dog = 'Ted';
console.log(person)

// Adicionando nova propriedade com alteração do objeto
// É possível ter objeto dentro de objeto

person = {
    firstName: 'Livia',
    lastName: 'Santos',
    age: 29,
    hobbies: ['Ler', 'Caminhar', 'Cozinhar'],
    dog: {
        name: 'Tronks',
        age: 4
    }
}

console.log(person)

// Acessando uma subpropriedade do objeto incluído

console.log(person.dog.name)

// Reescrevendo com destructuring

const { firstName, lastName, age, hobbies, dog: {name: dogName} } = person;

console.log(person)
console.log(dogName)