console.log("ARRAYS");

// 1. Given an array of integers, find the sum of all elements.
let arr = [1, 2, 3, 4, 5];

const sum = (a) => {
  console.log(a);
  // let totalSum = a.reduce((total, ele) => total + ele, 0)
  let totalSum = 0;
  for (let e of a) {
    totalSum = totalSum + e;
  }
  return totalSum;
};

// console.log("total sum is:", sum(arr));

// Reverse an Array

function reverseAnArray(nums) {
  //  let n = nums.length;
  //  let rev = [];
  //  for(let i=n-1; i >= 0 ; i--){
  //  	console.log("Print", nums[i])
  //   rev.push(nums[i])
  //  }

  //  return rev

  let n = nums.length;
  let i = 0;
  let j = n - 1;
  console.log("j val", j);
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  return nums;
}

// console.log(reverseAnArray(arr));

// Merge Two sort an array
let a = [3, 2, 5, 8];
let b = [1, 4, 6, 9];

function mergeTwoSortArray(a, b) {
  let l1 = a.length;
  let l2 = b.length;
  let res = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < l1 && j < l2) {
    if (a[i] < b[j]) {
      res[k++] = a[i++];
    } else {
      res[k++] = b[j++];
    }
  }

  while (i < l1) {
    res[k++] = a[i++];
  }
  while (j < l2) {
    res[k++] = b[j++];
  }

  return res;
}

// console.log("mergeTwoSortArray", mergeTwoSortArray(a, b));

// Sort 0 1 2 in an array
let sort = [2, 1, 0, 2, 1, 0, 0, 1, 2];

function SortAnArray(arr) {
  // let count0 = 0, count1 = 0, count2 = 0;
        
  // for(let num of arr){
  //     if(num === 0){
  //         count0++;
  //     } else if(num === 1){
  //         count1++
  //     } else {
  //         count2++
  //     }
  // }
  
  // let idx = 0;
  // for (let i =0; i< count0 ; i++){
  //     arr[idx++] = 0;
  // }
  // for (let i =0; i< count1 ; i++){
  //     arr[idx++] = 1;
  // }
  // for (let i =0; i< count2 ; i++){
  //     arr[idx++] = 2;
  // }
  
  // return arr

  // 2nd approach

  let low = (mid = 0);
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

// console.log("sort: ", SortAnArray(sort));

// Given an array of integers and a target sum, find the number of pairs of elements that add up to the target sum.
function countPairs(arr, targetSum) {
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === targetSum) {
  //       count++;
  //     }
  //   }
  // }
  // return count;

  const countMap = new Map();
  let count = 0;

  for (let num of arr) {
    const complement = targetSum - num;
    if (countMap.has(complement)) {
      count += countMap.get(complement);
    }
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  return count;
}

let count = [3, 2, 5, 8, 4];

// console.log(countPairs(count, 7));

function missingNumber(n, arr) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

function maxSubarraySum(arr) {
  let sum = 0;
  let maxSum = arr[0];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
