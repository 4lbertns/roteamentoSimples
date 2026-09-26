criar função e exportar o módulo todo:

function a(x) {
	return `${x}`
};

module.exports = a;

------------------------------

const a = require('./arq.js')

console.log(a(1));

------------------------------------------------------------

criar funções e exportá-las como objeto:

function a() {
	return"";
}

function b() {
	return ""
};

module.exports = {
	a,
	b	
};

------------------------------

const {a, b} = require('./arq.js');

console.log(a());
console.log(b());

------------------------------------------------------------

exportação direta e única (NÃO MAIS EXPORTAÇÃO DE MÓDULO/CONJUNTO DE CÓDIGO):

exports.a = () => {
	return 'A'
};

------------------------------

const a = require('./arq.js');

console.log(a());

------------------------------------------------------------------------------------------------------------------------

function a(b) {
	return 'a';
}

module.exports = a;

------------------------------------------------------------

const a = require('./arq.js');

console.log(a(15));

------------------------------------------------------------------------------------------------------------------------

const nome = (a) => { return `Seu nome é: ${a}` };
const idade = (a) => { return `Sua idade é: ${a}` };

module.exports = {
	nome,
	idade
};

------------------------------------------------------------

const { nome, idade } = requrie('./arq.js');

console.log(`${nome('Albert')} \n ${idade(20)}`);

------------------------------------------------------------------------------------------------------------------------

exports.soma = (a,b) => { return ´O resultado da soma de ${a} + ${b} é igual a: ${ a+b }!´ };

------------------------------------------------------------

const soma = require('./arq.js');