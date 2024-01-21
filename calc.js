const operand1 = process.argv[2]
const operator = process.argv[3]
const operand2 = process.argv[4]

let result;
switch (operator) {
    case "+": result = +operand1 + +operand2; break;
    case "-": result = +operand1 - +operand2; break;
    case "*": result = +operand1 * operand2; break;
    case "/": result = +operand1 / operand2; break;
}
console.log(operand1 + " " + operator +" " + operand2 + " = " + result)