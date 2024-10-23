function solution(num_list) {
    const sum = Math.pow(num_list.reduce((sum, num) => sum + num,0),2)
    const multi = num_list.reduce((multi,num) => multi * num, 1)
    return multi < sum ? 1 : 0
}