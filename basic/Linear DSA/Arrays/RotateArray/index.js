console.log("ARRAYS");

// 1. Given an array of integers, find the sum of all elements.
let arr = [1, 2, 3, 4, 5, 5];

const sum = (a) => {
  console.log(a);
    // let totalSum = a.reduce((total, ele) => total + ele, 0)
    let totalSum =  0;
    for (let e of a) {
      totalSum = totalSum + e;
    }
  return totalSum;
};

console.log("total sum is:", sum(arr));

// 2. Rotate an array to the right by k steps.

//    BF APPROACH
// This solution puts that exact direction into code. We run a for loop (k) times, on each pass pop()-ing off the last element of the array and giving it as an argument to unshift() it onto the front of the array. Then we return the array at the end.

// The runtime complexity here is O(n * k), as each time we use unshift() JavaScript is re-seating each element in the array under the hood.

// The space complexity is O(1), or constant space, since we're modifying the original array in-place. Great!

arr = [1, 2, 3, 4, 5];

const rotateArray1 = function (nums, k) {
  // for (let i = 0; i < k; i++) {
  //   let val = nums.pop();
  //   nums.unshift(val);
  // }
  // return nums;

  /* ---OR--- */
  const n = nums.length;

  for (let i = 0; i < k; i++) {
    const last = nums[n - 1];
    for (let j = n - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = last;
  }

  return nums;

};

// REVERSAL
// As for our actual solution, what we're doing is establishing a helper function that takes in an array, a start index and an end index, and then uses ES6 syntax to swap the array[start] and array[end] elements before incrementing and decrementing the pointers.

// Based off of our example above, we know we need to call this function three times:

// Once to reverse the entire array.
// Once to reverse from nums[0] to k.
// Once to reverse from k to the end.
// And we're done!

// The runtime complexity here is O(n * 3), since we still need to reverse each element at least once, and we'll be doing that three times.

// The space complexity here is, again, a constant O(1). Still great!

const rotateArray2 = function (nums, k) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

console.log(rotateArray1(arr, 3));


