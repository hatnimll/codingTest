const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    result = []
    str = input[0];
    n = Number(input[1]);
    for(let i = 0; i < n; i++){
        result.push(str)
    }
    console.log(result.join(''))
});