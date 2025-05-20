/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se 
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs 
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")()


const quantidade = parseInt(prompt("Digiti o número de maçãs compradas: ")) 

let valorTotal 

if(quantidade < 12){
    valorTotal = quantidade * 0.30
    console.log(" Abaixo de 12 unidade o valor da unidade é R$0.30")
} else {
    valorTotal = quantidade * 0.25  
    console.log(" Acima de 12 unidade o valor da unidade é R$0.25")
}
console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`)
