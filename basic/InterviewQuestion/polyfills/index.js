// What is Polyfill?
// ans:  Polyfill is a piece of code that enables us to use the newly supported feature in older browsers that do not support it natively.

// we can write some polyfill for map, filter, and reduce functions in Javascript.

// Polyfill for map

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Map method accepts a callback method applied to each element of the array and returns the new transformed array.
// E.g: const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]
// const anotherArray = numbers.map((x, index) => x * index); // [0, 2, 6, 12, 20]

Array.prototype.polyfillMap = function (mapLogicFn) {
  let output = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    // console.log( mapLogicFn(arr[i], i));
    console.log("values of arr", arr[i]);
    console.log("idx of arr",i);
    output.push(mapLogicFn(arr[i], i));
  }
  return output;
};

// polyfillMap method accepts a callback function called mapLogicFn which would be called over each element of the array. 
// map method returns a new array after applying mapLogicFn over each element. So we created a new empty array (output) to store the result.
// We need to iterate over the current array elements. In this context, the value of this will be the array itself. We assigned this to arr for readability purposes.

const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.polyfillMap(x => x * 2); // [2, 4, 6, 8, 10]
 const anotherArray = numbers.polyfillMap((x, index) => x * index); // [0, 2, 6, 12, 20]

// Polyfill for filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.myFilter = function(filterLogicFn){
    let output = [];
    let arr = this
    // console.log(arr);
    for(let i=0; i< arr.length; i++){
        if(filterLogicFn(arr[i], i)){
            output.push(arr[i]);
        }
    }
    return output
}

// const numbers = [1, 2, 3, 4, 5];
const filter = numbers.myFilter(x => x % 2 === 0);
const filterOdd = numbers.myFilter(x => x % 2 !== 0);
console.log("fil", doubledNumbers);




// Polyfill for reduce


// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
/* accumulator accumulate the sum, curr refer to the current element. 
   0 is the initial value of accumulator. */
const sumOfNumbers = numbers.reduce((accumulator, curr) => accumulator + curr, 0); 

Array.prototype.polyfillReduce = function(reduceFn, initialValue) {
  let output = initialValue, arr = this;
  // Next is iterating over each element and applying the reducer function. The result of the calling reducer function is updated in output.
  for (let i = 0; i < arr.length; i++) {
    output = reduceFn(output, arr[i], i);
  }
  return output;
}

const numbers3 = [1, 2, 3, 4, 5, 6, 7];
const sumOfNumbers2 = numbers.polyfillReduce((acc, curr) => acc + curr, 0); // 28

// Polyfill for forEach
// The forEach() executes the callback function on each element of array.
const names = ["ali", "hamza", "jack"];
function consoleFunc(x) {
   console.log(x);
}
names.forEach(consoleFunc);

Array.prototype.polyfillForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
};
names.polyfillForEach(consoleFunc);