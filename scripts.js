// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

// Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
// O resultado final desse desafio deve ser algo em torno de:

let numberOne = prompt("Insira o primeiro número")
let numberTwo = prompt("Insira o segundo número")

let parImpar = (Number(numberOne) + Number(numberTwo)) % 2

alert(`A soma dos números é: ${Number(numberOne) + Number(numberTwo)}`)
alert(`A subtração dos números é: ${Number(numberOne) - Number(numberTwo)}`)
alert(`A multiplicação dos números é: ${Number(numberOne) * Number(numberTwo)}`)
alert(`A divisão dos números é: ${Number(numberOne) / Number(numberTwo)}`)
alert(`O resto da divisão dos números é: ${Number(numberOne) % Number(numberTwo)}`)

if (parImpar == 0) {
    alert(`A soma dos dois números é par`)
}
 else {
    alert(`A soma dos dois números é ímpar`)
}

if (numberOne === numberTwo) {
    alert (`Os dois números são iguais`)
} else {
    alert (`Os dois números são diferentes`)
}