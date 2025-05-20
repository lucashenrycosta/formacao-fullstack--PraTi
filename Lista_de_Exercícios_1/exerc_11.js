/*
Escreva um programa que solicita ao usuário 5 números 
e calcula a soma total utilizando um loop for.
*/

const prompt = require("prompt-sync")()
 let soma = 0 

 for (let i = 1; i <=5; i++){
    const numero = parseFloat(prompt(`Digite o ${i} número:`))
    if(!isNaN(numero)){
        soma += numero
    } else {
        console.log("Valor invalido! Digite apenas números.")
        i--
    }
 }
 console.log(`A soma total dos números é: ${soma}`)