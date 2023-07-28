//Lógica JS 2/7: Variáveis.

let user = prompt ('Qual é o seu nome?');
let age = prompt ('Quantos anos você tem?');
let language = prompt ('Qual linguagem de programação você está estudando?');

alert (`Olá ${user}, você tem ${age} anos e já está aprendendo ${language}`);

let like = prompt (`você gosta de estudar ${language}? responda "sim" ou "não".`).toLowerCase();

// Validação da resposta.
if (like === 'sim' || like === 's') {
	alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (like === 'não' || like === 'nao' || like === 'n') {
	alert('Ahh que pena... Já tentou aprender outras linguagens?');
} else {
	alert('Resposta inválida. Por favor, responda "sim" ou "não".');
};
