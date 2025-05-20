/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores 
iguais) e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")()

let valor1 
let valor2

do{
    valor1 = parseFloat(prompt("Digite o Primeiro valor:"))
    valor2 = parseFloat(prompt("Digite o Primeiro valor:"))

   if (valor1 === valor2){
    alert("Os valores não podem ser iguais. Digite novamente!")
   }
} while (valor1 === valor2)
    
if (valor1 < valor2){
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`)
}else{
    console.log(`Valores em ordem crescente:${valor1}, ${valor2} `)
}