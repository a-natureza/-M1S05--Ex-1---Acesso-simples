// Requerendo a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Criando um array chamado frutas
let frutas = [];

// Solicitando ao usuário para inserir três frutas
for (let i = 0; i < 3; i++) {
    frutas[i] = prompt(`Digite o nome da fruta ${i + 1}: `);
}

// Adicionando mais uma fruta ao array
let frutaAdicional = prompt("Digite o nome de mais uma fruta para adicionar ao array: ");
frutas.push(frutaAdicional);

// Removendo a primeira fruta do array
frutas.shift();

// Imprimindo o array atualizado no console
console.log("Array atualizado de frutas:", frutas);
