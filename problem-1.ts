const number = [1, 8, 6, 8, 1, 7, 3]
const number2 = [1, 2, 3, 4, 5, 6]

function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, current) => sum + current, 0)   
}

console.log(sumArray(number));     //output - 34
console.log(sumArray(number2));    //output - 21
