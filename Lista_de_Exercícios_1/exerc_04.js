/*
Crie um menu interativo no console que oferece ao usuário a escolha de três 
opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

console.log("===== filmes em Cartaz =====")
console.log("1- Homem Aranha (18:30)")
console.log("2- Minha Vida (19:00)")
console.log("3- Uma Noite Longa (00:00) ")
console.log("============================")


let Opção= prompt("Escolha uma opção(1-3):")

switch(Opção){
    case "1":
        console.log("   Você escolheu: Homem Aranha (18:30):    ")
        console.log("   Em exibição na Sala 3. Tenha um bom filme!")
        console.log("   Imprimendo Engresso..                  ")
        break
    case "2":
        console.log("   Você escolheu: Minha Vida (19:00):    ")
        console.log("   Em exibição na Sala 4. Tenha um bom filme!")
        console.log("   Imprimendo Engresso..                  ")
        break
    case "3":
        console.log("   Você escolheu: Uma Noite Longa (00:00):    ")
        console.log("   Em exibição na Sala 2. Tenha um bom filme!")
        console.log("   Imprimendo Engresso..  ")
        break
    default: 
    console.log("Opção invalida! Por Favor, escolha entre 1 e 3.")      
}

