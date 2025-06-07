function solution(my_string, queries) {
    let result = ''
    let arr = my_string.split('')
    
    for(let i = 0; i < queries.length; i++){
        let s = queries[i][0]
        let e = queries[i][1]
        toBeChanged = arr.slice(s, e +1)
        reverse = toBeChanged.reverse()
        
        arr.splice(s, e-s+1, ...reverse)
    }
    
    return arr.join('')
}