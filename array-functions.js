
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
