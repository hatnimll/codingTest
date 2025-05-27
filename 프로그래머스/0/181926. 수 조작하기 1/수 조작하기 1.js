function solution(n, control) {

    const arr = control.split("")
    
    const countW = arr.filter(item => item === 'w').length
    const countS = arr.filter(item => item === 's').length
    const countD = arr.filter(item => item === 'd').length
    const countA = arr.filter(item => item === 'a').length
    
    return n + countW * 1 + countS * (-1) + countD * 10 + countA * (-10)
}