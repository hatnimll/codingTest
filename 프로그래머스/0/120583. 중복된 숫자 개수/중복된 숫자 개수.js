function solution(array, n) {

    return array.reduce((acc, curr)=> curr === n ? ++acc : acc, 0)
}