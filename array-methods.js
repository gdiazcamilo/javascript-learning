
const array = [1,2,3,4,5];
console.log(array);

// map
// execute a function for each element in the array, return a new array.

console.log('Map');
console.log('array.map(e => e / 2)');
mappedArray = array.map(e => e / 2)
console.log(mappedArray);
console.assert(mappedArray[0] == 0.5)
console.assert(mappedArray[1] == 1)
console.assert(mappedArray[2] == 1.5)
console.assert(mappedArray[3] == 2)
console.assert(mappedArray[4] == 2.5)


// filter
// return a new array whose element match the condition in the function. The function must return a boolean.
console.log('Filter');
console.log('array.filter(e => e > 3)');
filteredArray = array.filter(e => e > 3)
console.log(filteredArray)
console.assert(filteredArray.length == 2)
console.assert(filteredArray[0] == 4)
console.assert(filteredArray[1] == 5)


// includes
// return a boolean indicating if the element is in the array.
console.log('Includes')
console.log('array.includes(4)')
includeResult = array.includes(4)
console.log(includeResult);
console.assert(includeResult == true)

// includes takes a second optional parameter that indicates the index where the search will start
includeResult = array.includes(1,1)
console.log('array.includes(1,1)')
console.log(includeResult)
console.assert(includeResult == false)


// find
// returns the first element that matches the condition
console.log('Find')
console.log('array.find(a => a == 4)');
findResult = array.find(a => a == 4);
console.log(findResult)
console.assert(findResult == 4)

console.log('array.find(a => a > 2)');
findResult = array.find(a => a > 2);
console.log(findResult)
console.assert(findResult == 3)

console.log('array.find(a => a  == -99)');
findResult = array.find(a => a == -99);
console.log(findResult)
console.assert(findResult === undefined)


// reduce
// returns a single element, which is the result of accumulator. 
// The accumulator is a function that you define, which makes something with the current element and store the value of the previous iteration.
console.log('array.reduce((accumulator, currentElement) => accumulator + currentElement, 0)');
reduceResult = array.reduce((accumulator, currentElement) => accumulator + currentElement, 0); // 0 is the value of the accumulator on the first iteration.
console.log(reduceResult);
console.assert(reduceResult == (1+2+3+4+5))

function sumEvenAccumulator(accumulator, currentElement) {
    tempResult = accumulator + currentElement
    if(tempResult % 2 == 0) {
        return tempResult;
    }
    return accumulator;
}

console.log('array.reduce((accumulator, currentElement) => accumulator + currentElement, 0)');
reduceResult = array.reduce((accumulator, currentElement) => sumEvenAccumulator(accumulator, currentElement), 0);
console.log(reduceResult);
console.assert(reduceResult == 6);