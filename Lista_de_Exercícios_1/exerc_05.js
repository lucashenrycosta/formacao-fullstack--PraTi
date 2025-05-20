/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma 
pessoa e determina a categoria de peso (baixo peso, peso normal, 
sobrepeso, obesidade) utilizando if-else.
*/

const prompt = require("prompt-sync")()
console.log(" ======= Calculo Do IMC ======")

let Peso = prompt("Qual e o seu Peso(Kg)?")
let Altura = prompt("Qual e o sua Altura(m)?" )

const Calculo = (Peso/(Altura*Altura)).toFixed(2)
const IMC = Calculo.slice(0, 3)

let Resultado
if(Calculo <= 18.5) { Resultado = "Abaixo do Peso"

}else if (Calculo >= 18.6 && Calculo <= 24.9) {
       Resultado = "Peso Normal"
} else if (Calculo >= 25 && Calculo <= 29.9) {
    Resultado = "Sobrepeso"
} else if (Calculo >= 30 && Calculo <= 34.9) {
    Resultado = "Obesidade Grau-1"  
} else if (Calculo >= 35 && Calculo <= 39.9) {
    Resultado = "Obesidade Grau-2" 
} else {
        Resultado = "Obesidade Grau-"}


const IMCFinal = Calculo.substring(0, 3);        
const Dados = [{
    "Peso (kg)":Peso,
    "Altura (m)":Altura,
    "IMC": IMC,
    "Resultado": Resultado
}
]

console.log(" ========= Resultado ======== ")
console.table(Dados)


