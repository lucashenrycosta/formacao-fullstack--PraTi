/*
Crie um programa que classifica a idade de uma pessoa em categorias 
(criança, adolescente, adulto, idoso) com base no valor fornecido, 
utilizando uma estrutura de controle if-else.
*/

const prompt = require('prompt-sync')()


console.log("==========Calcúlo da faixa etaria:=========")

let Nascimento = prompt("Em qual ano você nasceu? (AAAA) ")
let Ano = new Date ().getFullYear()
const Idade = Ano - Nascimento 

let FaixaEtaria
if(Idade <= 12) {FaixaEtaria = "Criança"

}else if (Idade >= 13 && Idade <= 18) {
       FaixaEtaria = "Adolecente"
} else if (Idade >= 19 && Idade <= 64) {
    FaixaEtaria = "Adulto"  
} else {
        FaixaEtaria = "Adulto"}
console.log(`Você tem ${Idade} anos, sua fáixa etária é ${FaixaEtaria}.`)
