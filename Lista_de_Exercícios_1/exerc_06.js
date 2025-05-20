
/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados 
fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo 
de triângulo: Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C [C<>A])
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const prompt = require('prompt-sync')()

console.log( "Digite os três lados dos Triângulo")
const A = parseFloat(prompt("Lado A:"))
const B = parseFloat(prompt("Lado B:"))
const C = parseFloat(prompt("Lado C:"))


if(A + B > C && A + C > B && B + C > A ){
    console.log ("Os Lados Foram um Triângulo")

 if (A === B && B === C){
    console.log("Triângulo Equilátero (três lados Iguais)")

 }
   else if (A === B || A  === C || B ===C){
    console.log("Triângulo Isósceles (dois lados Iguais)")

   
    } 
   else {
    console.log("Triângulo Escaleno (todos os lados diferentes)")
    }

}  
   
else{
   console.log("Os lados Não formam um triângulo")
}
