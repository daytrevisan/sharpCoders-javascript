// Programação Orientada a Objetos
// Instanciando classe e alterando acesso (encapsulamento)

class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

    speak() {
        console.log('Hello!')
    }
}

const person = new Person('Jane', 'Doe', 40)
console.log(person)

// Podemos acessar o objeto (person) através dos métodos da classe (Person)
person.getFullName()
person.speak()

// Porém, se o método for alterado para static, o acesso é somente pela classe

class Person2 {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
    
    // Alterando acesso do método *speak* (ENCAPSULAMENTO)
    static speak() {
        console.log('Hi!')
    }
}

const person2 = new Person2('John', 'Thompson', 29)
// Acesso pelo objeto
// person2.speak() // erro de acesso

// Acesso pela classe
Person2.speak() // Hi!