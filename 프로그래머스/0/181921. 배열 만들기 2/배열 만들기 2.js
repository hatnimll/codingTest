function solution(l, r) {
    const answer = []

    for(let i = l; i <= r; i++){
        const arr = String(i).split('');
        let isValid = true;
        
        for(let j = 0; j < arr.length; j++){
            if(arr[j] !== '5' && arr[j] !== '0'){
                isValid = false;
                break;
            }
        }
        
        if(isValid){
            answer.push(Number(arr.join('')))
        }
    }
    
    return answer.length > 0 ? answer : [-1]
}