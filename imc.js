// CRIAR VARIAVEL DO NOME
// FRIAR VARIAVEL DA IDADE
// VARIAVEL DO PESO
// VARIAVEL DA ALTURA
// CALCULAR O IMC
// IMC = PESO / (ALTURA * ALTURA)
// PRINT DO NOME E O IMC
// SE IMC <= 18.5 "ABAIXO DO NORMAL"
// SENÃO SE IMC <= 24.9 "NORMAL"
// SENÃO SE IMC <= 29.9 "SOBREPESO"
// SENÃO SE IMC <= 34.9 "GRAU 1"
// SENÃO SE IMC <= 39.9 "GRAU 2"
// SENÃO SE IMC >= 40 "MELHOR IR PARA ACADEMIA"

let nome = 'Ana Lu'
let idade = 28
let peso = 62
let altura = 1.60
let imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log ('Abaixo do normal', imc)
}else if (imc <= 24.9){
    console.log ('Normal', imc)
}else if (imc <= 29.9) {
    console.log ('Sobrepeso', imc)
}else if (imc <= 34.9) {
    console.log ('Grau 1', imc)
}else if (imc <= 39.9) {
    console.log ('Grau 2', imc)
}else if (imc >= 40) {
    console.log ('Melhor ir para academia')
}

/**
 * =====================================
 * Nome:            Idade:
 * Peso:            Altura:
 * Valor do IMC:
 * =====================================
 */

console.log ('Nome:', nome)
console.log ('Idade:', idade)
console.log ('Peso:', peso)
console.log ('Altura:', altura)
console.log ('imcr')