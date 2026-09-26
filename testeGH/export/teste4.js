const nome = require('./teste');

console.log('')
console.log(nome('Albert'));
console.log('')

// ------------------------------------

const {sum, sub} = require('./teste2');

console.log(sum(5, 5))
console.log(sub(5,5))
console.log('')

// ------------------------------------

const {div, mult, a} = require('./teste3');

console.log(div(5, 5));
console.log(mult(5, 5));
console.log(a(25));
console.log('')
