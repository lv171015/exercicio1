var nome
var idade
var peso
var altura
var profissao

nome = prompt("Insira a sua nome")
idade = parseInt(prompt("Insira seu idade"))
peso = parseFloat(prompt("insira seu peso"))
altura = parseFloat(prompt("insira sua altura"))
profissao = prompt("informe sua profissao")   

//Para printar no console
console.log(nome)
console.log(idade)
console.log(peso)
console.log(altura)
console.log("sua profissao é:" + profissao)

console.log("ola seu nome é" + (nome), "voce tem" + (idade) + "anos", "voce pesa" + (peso), "sua altra é" + (altura), "e sua profissao é" + (profissao))
if (idade > 18) { console.log("podebeber") }
if (idade < 18) { console.log("naopodebeber") }

var imc = (peso / (altura * altura))

if (imc <= 18.5){

    console.log("seu imc é magreza")

}else if (imc > 18.5 && imc <= 24.9){

console.log("seu imc é normal")

}else if (imc > 24.9 && imc <= 30){

    console.log("seu imc é sobrepeso")
}else{
   
    console.log("seu imc é de obesidade")
    
}

