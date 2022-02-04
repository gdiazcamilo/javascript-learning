/* 
    Currying allow us to pass the parameter of a function one by one, meaning one by one in each call. 
    So if a function receive two parameters we will call the function one with the first parameter and another time with the second parameter.
*/


// usual way
const multiplyBy = (a, b) => a * b;
console.log('multiplyBy(3,4)');
const result = multiplyBy(3,4)
console.log(result);
console.assert(result == 12)

// with currying
const curriedMultiplyBy = (a) => (b) => a * b;
const curriedResult = curriedMultiplyBy(3)(4);
console.log('curriedMultiplyBy(3)(4)');
console.log(curriedResult);
console.assert(curriedResult == 12);

const multiply = (a) => { return {by: (b) => a * b} };
console.log('multiply = (a) => { return {by: (b) => a * b} };');
console.log('multiply(3).by(4)');
console.log(multiply(3).by(4))
console.assert(multiply(3).by(4) == 12)


// same thing, but using long function syntax
function longCurriedMultiplyByA(a) {
    function longCurriedMultiplyB(b) {
        return a * b;
    }

    return longCurriedMultiplyB;
}
const longCurriedResult = longCurriedMultiplyByA(3)(4);
console.log('longCurriedMultiplyByA(3)(4)');
console.log(longCurriedResult);
console.assert(longCurriedResult == 12);


// Currying allow us to call a function with a predefined value. That can be useful for utilities functions.
const multiplyBy10 = curriedMultiplyBy(10);
const multiplyBy10Result = multiplyBy10(3);
console.log('multiplyBy10 = curriedMultiplyBy(10)');
console.log('multiplyBy10(3)');
console.log(multiplyBy10Result);
console.assert(multiplyBy10Result == 30);

