/*
Fazer um algoritmo para receber números decimais até que o usuário 
digite 0 e fazer a média aritmética desses números.
*/

const prompt =require("prompt-sync")()

let soma = 0
let quantidade = 0
let numero

console.log("Digite números decimais (Digite 0 para encerrar e calcular a média:")
do {
    numero = parseFloat(prompt(`Número ${quantidade + 1}:`))

if (isNaN(numero)){
    console.log("Valor inválido! Didite Apenas números.")
} else if (numero !== 0){
    soma += numero
    quantidade++
}

} while (numero !== 0){
    const media = soma / quantidade
    console.log(`media aritmética: ${media.toFixed(2)}`)
    
}