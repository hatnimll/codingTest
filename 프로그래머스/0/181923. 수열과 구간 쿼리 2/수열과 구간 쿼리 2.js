function solution(arr, queries) {
    const answer = [];
    
    for(const [s, e, k] of queries){
        const greaterThanK = [];
        for(let i = s; i <= e; i++){
            if( arr[i] > k){
               greaterThanK.push(arr[i])
            }
        }
        greaterThanK.length === 0 ? answer.push(-1) : answer.push(Math.min(...greaterThanK))
    }
    
    return answer;
}