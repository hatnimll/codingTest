function solution(array) {
    array.sort((a, b) => a-b)
    const idx = (array.length - 1) / 2
    
    return array[idx]
}