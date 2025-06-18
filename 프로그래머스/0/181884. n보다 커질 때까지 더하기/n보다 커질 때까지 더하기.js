function solution(numbers, n) {

    const answer = numbers.reduce((acc, curr)=> {
        if(acc <= n){
            acc += curr;
        }
        return acc;
    },0)
    
    return answer
}