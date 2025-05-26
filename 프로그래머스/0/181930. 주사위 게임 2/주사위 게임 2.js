function solution(a, b, c) {
    let result;
    if(a === b){
        if(a === c){
           result = (a + b + c) * 
            (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * 
            (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
        }else{
            result = (a + b + c) * 
            (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
        }
    }else {
        if(b === c || a === c){
            result = (a + b + c) * 
            (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
        }else{
            result = a + b + c;
        }
    }
    return result;
}