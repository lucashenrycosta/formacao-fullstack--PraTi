/*
Crie um programa que calcula o fatorial de um número 
fornecido pelo usuário utilizando um loop for ou while.
*/

const prompt = require("prompt-sync")()


function calcularFatorial(){
    const imput = prompt("Digite um número inteiro não negativo para calcular o fatorial: ")
    const numero =parseInt(imput)
    if (isNaN (numero)|| numero < 0) {
        console.log ("Erro: Por favor, digite um número inteiro não negativo.")
        return
    }



let fatorial = 1
for (let i = 2; i <= numero; i++ ){
    fatorial *= i

}
console.log(`O fatorial de ${numero} é ${fatorial}`)

}
calcularFatorial()