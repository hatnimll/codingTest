const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    firstNum = input[0]
    secondNum = input[1]
    console.log(`${firstNum} + ${secondNum} = ${Number(firstNum) + Number(secondNum)}`)
});