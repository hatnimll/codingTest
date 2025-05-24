function solution(code) {
    const ret = [];
    let mode = 0;
    
    for(let i = 0; i < code.length; i++){
        if(code[i] === '1'){
           mode = mode === 0 ? 1 : 0;
        continue;
        }
        
        if(i % 2 === 0 && mode === 0){
            ret.push(code[i])
        }else if(i % 2 === 1 && mode === 1){
            ret.push(code[i])
        }
    }
    
    if(ret.length === 0){
        return 'EMPTY'
    }
    return ret.join('');
}