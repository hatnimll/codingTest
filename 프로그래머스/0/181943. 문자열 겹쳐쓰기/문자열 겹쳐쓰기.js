// function solution(my_string, overwrite_string, s) {
//    const newStringArr = my_string.split('').slice(0,s).concat(overwrite_string.split('')).concat(my_string.split('').slice(s,my_string.length))
//    return newStringArr.join('')
// }
function solution(my_string, overwrite_string, s) {
    const my_stringArr = my_string.split('')
    const overwrite_stringArr = overwrite_string.split('')
    const newStringArr = my_stringArr.slice(0,s).concat(overwrite_stringArr)
    const newString = newStringArr.concat(my_stringArr.slice(s+overwrite_string.length, my_string.length)).join('')
 
    
    return newString
}