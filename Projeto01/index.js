//alert ('Página com JavaScript')

let idade = parseInt(prompt ('Informe a idade: '))

if (idade >=0 && idade <15) {
    console.log ('Não pode votar')
}else if (idade >=16 && idade <50) {
    console.log ('Pide votar fila normal')
}else if (idade >=50 && idade >70) {
    console.log ('Pode votar fila preferencial')
}else if (idade >=70){
    console.log ('Não precisa votar')
}

/**
 * Criar uma calculadora
 * solicitar o OPERADOR
 * em seguida o VALOR1
 * em seguida o VALOR2
 * o sistema deve verificar
 * qual é o seu OPERADOR (SE SENÃO)
 * em seguida validar a conta
 * usar os operadores
 * (+ - * /)
 */

let valor1 = parseInt(prompt ('Informe o valor1: '))
let valor2 = parseInt(prompt ('Informe o valor2: '))
let operador = '+'


if (operador === '+'){
    console.log ('Soma: ', valor1 + valor2)
}else if (operador === '-'){
    console.log ('Subtração: ', valor1 - valor2)
}else if (operador === '*'){
    console.log('Multiplicação: ', valor1 * valor2)
}else if (operador === '/'){
    console.log('Dividir: ', valor1 / valor2)
}
