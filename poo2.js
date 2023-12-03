// Programação Orientada a Objetos
// Instanciando classe, herdando actributos (HERANÇA) e reecrevedo método (POLIMORFISMO)

class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log(`${this.name} made some noise!`)
    }
}

const animal = new Animal('Simba')
animal.makeNoise()

// Criando uma classe derivada de Animal (HERANÇA)

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    // Reescrevendo o método makeNoise (POLIMORFISMO)
    bark() {
        console.log(`${this.name} barked!`)
    }
}

// Podemos chamar um atributo da classe mãe através do objeto instanciado pela classe ou pela própria classe mãe

const dog = new Animal('Bob')
const dog2 = new Dog('Rex')
dog.makeNoise()
dog2.makeNoise()

// Como *bark* é um método da classe filha, a classe mãe não acessa
// dog.bark()

// Acesso pela classe filha
dog2.bark()