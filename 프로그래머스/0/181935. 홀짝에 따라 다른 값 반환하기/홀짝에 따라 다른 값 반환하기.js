function solution(n) {
    if(n % 2 !== 0){
        let result = 0
        for(let i = 0; i <= n; i++){
            if(i % 2 !== 0)
            result += i
        }
        return result
    }else{
        let result =0
        for(let i = 0; i <= n; i++){
            if(i % 2 === 0)
            result += i * i
        }
        return result
    }
}