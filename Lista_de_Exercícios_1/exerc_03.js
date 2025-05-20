/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica 
como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require('prompt-sync')()

console.log("==========/ Aprovação, Recuperação ou Reprovação /=========")

let Notatotal = prompt(" Qual foi a sua Nota?")
let NotaMaxima = (10) 

let Resultado

if(Notatotal <= 0) {resultado = "Você foi Reprovado."

}else if (Notatotal>= 5 && Notatotal <= 6) {
       Resultado = "Você está em Recuperação."
} else if ( Notatotal>= 7 && Notatotal <= 10) {
    Resultado = "Você foi Aprovado."  
} else {
        Resultado = "Você foi Reprovado"}



console.log(Resultado)
