function solution(n) {
    const array = [n];
    while(n !== 1){
        if(n % 2 === 0){
            n = n / 2;
        }else{
            n= n * 3 + 1;
        }
        array.push(n)
    }
    return array;
}