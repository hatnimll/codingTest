function solution(n) {
    let answer;
    
    if(n % 7 === 0){
        answer = n / 7;
    }
    
    if(n % 7 !== 0){
        answer =  Math.floor(n / 7) + 1
    }
    return answer
}