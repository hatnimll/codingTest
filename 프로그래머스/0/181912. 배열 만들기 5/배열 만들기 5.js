function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(let i = 0; i < intStrs.length; i++){
        let slicedStr = intStrs[i].slice(s, s+l)
        let number = Number(slicedStr)
        
        number > k ? answer.push(number) : [...answer]
    }
    
    return answer;
}