// Thuthy & Falsy
// Verificações de checagem de true/false no JS

// Condições *FALSE*

// 1. String vazia
const x = '';
console.log(!!x) // !! na frente verifica se é T/F

// 2. Variável com valor zero
const y = 0;
console.log(!!y)

// 3. Variável *null*
const a = null;
console.log(!!a)

// 4. Variável *undefined*
const b = undefined;
console.log(!!b)

// Condições *TRUE*

// Lista vazia
const list = [];
console.log(!!list)

// Objeto vazio
const object = {};
console.log(!!object)