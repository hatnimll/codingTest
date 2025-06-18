function solution(array, height) {
   
    return array.reduce((acc, curr) => curr > height ? ++acc : acc, 0)
}