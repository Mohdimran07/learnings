// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

/*
    Input: arr[] = {3, 5, 4, 1, 9}
    Output: Minimum element is: 1
    Maximum element is: 9
*/

// case 1: using Built-in function like Math.max(...arr) and Math.min(...arrr)

// const arr = [3, 5, 4, 1, 9, 22, 0, -1];
const arr = [4, 9, 6, 5, 2, 3];

function findMaxAndMin1(a) {
  return [Math.max(...a), Math.min(...a)];
}

// case 2: Assuming the first variable as max and min and iterating through the array and matching the other value with other and updating.

const findMaxAndMin = (a) => {
  let max = (min = a[0]);
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return [max, min];
};
// console.log(findMaxAndMin(arr));

// case 3: using Sorting
/* 
    an array is to first sort the array in ascending order. Once the array is sorted, the first element of the array will be the minimum element and the last element of the array will be the maximum element.
*/

const findMaxAndMin3 = (a) => {
  a.sort((a, b) => a - b);

  return [a[a.length - 1], a[0]];
};

console.log(findMaxAndMin3(arr));
