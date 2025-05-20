/*
Crie um programa que exibe a tabuada de um número fornecido pelo 
usuário (de 1 a 10) utilizando um loop for.
*/

const prompt = require( "prompt-sync")()
const numero = parseFloat(prompt("Digite um número para ver sua tabuada (1 a 10):"))

if (isNaN(numero)) {
    console.log("Por Favor, digite um número válido.")
}else{
        console.log(`tabuana do ${numero}:`)
        console.log(`===== Tabuana do ${numero}=====`)
        for (let i = 1; i <= 10; i++){
            const resultado = numero * i
            console.log(`${numero} X ${i} = ${resultado}`)
        }
        console.log(`===========================`)

    }