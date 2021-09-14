var nome = "Rafael"
var escola = "Poliedro"
var nota1 = 10
var nota2 = 7
var nota3 = 8
var nota4 = 9


var media = (nota1+nota2+nota3+nota4) / 4

console.log(`Bem vindo ao colégio ${escola}, ${nome}!`)

if (media < 7){
    var reprovado = "REPROVADO!"
    console.log("Calculando sua média....")
    console.log(`Sua média final foi de ${media.toFixed(1)}, com isso ${nome} você está REPROVADO!`)
    console.log(`Entre em contato com a secretaria do ${escola} para maiores informações! `)
    msg.innerHTML = `<p>${nome}, sua média foi de: ${media} e você está ${reprovado.fontcolor("red")}</p>`
} else {
    var aprovado = "APROVADO!"
    console.log("Calculando sua média....")
    console.log(`Sua média final foi de ${media.toFixed(1)}, com isso ${nome} você está APROVADO!`)
    console.log(`O ${escola} agradece seu esforço, e tenha boas férias! `)
    msg.innerHTML = `<p>${nome}, sua média foi de: ${media} e você está ${aprovado.fontcolor("green")}</p>`
}


/* 

Anotações Aula 01

Operações matematicas: 
Soma = +
Subtração = -
Divisão = /
Multiplicação = *

Como definir números de casas decimais:
tofixed(2) -> 2 define dois números após a virgula.

Como mostrar a mensagem no console:
console.log("Mensagem aqui!")

*/