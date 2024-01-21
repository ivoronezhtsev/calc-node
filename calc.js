const operand1 = process.argv[2]
const operator = process.argv[3]
const operand2 = process.argv[4]


let result;
if(operator === "+") {
    result = +operand1 + +operand2
} else if(operator === "-") {
    result = +operand1 - +operand2
} else if( operator === "*") {
    result = +operand1 * +operand2
} else if(operator === "/") {
    result = +operand1 / operand2
}
console.log(operand1 + " " + operator +" " + operand2 + " = " + result)

