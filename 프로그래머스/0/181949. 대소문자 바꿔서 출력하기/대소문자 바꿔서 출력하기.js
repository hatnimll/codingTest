const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
    const str = input.split("");
    const newStr = str.map((strItem)=> 
        strItem === strItem.toUpperCase() ? strItem.toLowerCase() : strItem.toUpperCase()
    )
    console.log(newStr.join(''))
});