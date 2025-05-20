
/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require("prompt-sync")();
function exibirNumero10Vezes() {
    while (true) {
        const input = prompt("Digite um número inteiro: ");
        const numero = parseInt(input);
        
        if (!isNaN(numero) && Number.isInteger(numero)) {

            for (let i = 0; i < 10; i++) {
                console.log(numero);
            }
            break;
        } else {
            console.log("Valor inválido! Por favor, digite um número inteiro.");
        }
    }
}

exibirNumero10Vezes();