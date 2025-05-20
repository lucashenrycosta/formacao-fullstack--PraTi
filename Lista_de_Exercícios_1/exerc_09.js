/*
Implemente um programa que exibe uma contagem regressiva 
de 10 até 1 no console utilizando um loop for.
*/

let i = 10

const intervalo = setInterval(() =>{
    console.log(i)
    i--
    if (i < 1 ){ 
        clearInterval(intervalo)
        console.log("Contagem regressiva finalizada")
    }
},1000)
