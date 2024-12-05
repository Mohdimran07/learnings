/* 
  Find duplicate elements in an array
  The task is to find all elements that have more than one occurrences.

  Approaches:
    1. Use nested loop and for each element check if the element is present in the array more than once or not. If present, then check if it is already added to the result. If not, then add to the result.

    2. Better Approach – Use Sorting and Binary Search – O(n Log n) Time and O(1) Space
        * Sort the array.
        * For every element, find indexes of its first and last occurrences using      binary search.
        * If both indexes are same, then this element is having only one occurrence,   so we ignore this element.
        Else, we add this element to result and move the index to last index of this element plus 1.
    
    3. We use hashing. Count frequency of occurrence of each element and the elements with frequency more than 1 is printed. 

*/

function findDuplicatesBF(arr) {
  let res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Check if the duplicate element is already in res
        if (!res.includes(arr[i])) {
          // Add the element to res if not already present
          res.push(arr[i]);
        }

        // Move to the next element in arr
        break;
      }
    }
  }

  return res;
}

function findDuplicatesBA(arr) {
  arr.sort();
  let res = [];

  let i = 0;
  while (i < arr.length) {
    // Index of first and last occurrence of arr[i]
    // using binary search
    let first = arr.indexOf(arr[i]);
    let last = arr.lastIndexOf(arr[i]);

    // If the element occurs more than once, add it to res
    if (last > first) {
      res.push(arr[i]);
    }

    // Update i to the last index
    // of the current element
    i = last + 1;
  }
  return res;
}

function duplicatesEA(arr, n) {
  let frequency = {};
  let duplicatess = [];

  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  for (let num in frequency) {
    if (frequency[num] > 1) {
      duplicatess.push(parseInt(num));
    }
  }
  duplicatess.sort((a, b) => a - b);

  return duplicatess.length > 0 ? duplicatess : [-1];
}

// const arr = [0, 3, 1, 2, 2, 3];

// console.log("duplicate:", duplicates(arr, arr.length));

// We use an object (frequency) to keep track of how many times each element appears in the array.
// We loop through the array and update the frequency of each element.
// We then check the frequencies and add elements that appear more than once to the duplicates array.
// The duplicates array is sorted in ascending order.
// We return the sorted list of duplicates. If there are no duplicates, we return [-1].

// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.

// Input:
// N = 5
// A[] = {3,1,3,3,2}
// Output:
// 3
// Explanation:
// Since, 3 is present more
// than N/2 times, so it is
// the majority element.

function majorityElement(a, size) {
  // BF
  //   let maxCount = size / 2;
  //   for (let i = 0; i < a.length; i++) {
  //     let count = 0;
  //     for (let j = 0; j < a.length; j++) {
  //       if (a[i] === a[j]) {
  //         count++;
  //       }
  //     }
  //     if (count > maxCount) {
  //       return a[i];
  //     }
  //   }
  //   return -1;
  // Optimised
  //   let n = arr.length;
  //   let frequencyMap = new Map();
  //   // Traverse the array and count frequencies
  //   for (let num of arr) {
  //       if (frequencyMap.has(num)) {
  //           frequencyMap.set(num, frequencyMap.get(num) + 1);
  //       } else {
  //           frequencyMap.set(num, 1);
  //       }
  //   }
  //   // Check frequencies and find the majority element
  //   for (let [num, count] of frequencyMap) {
  //       if (count > Math.floor(n / 2)) {
  //           return num;
  //       }
  //   }
  //   // If no majority element is found
  //   return -1;
}

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

function containsDuplicate(nums) {
  // const n = nums.length;
  // for (let i = 0; i < n; i++) {
  //     for (let j = i + 1; j < n; j++) {
  //         if (nums[i] === nums[j]) {
  //             return true; // Duplicate found
  //         }
  //     }
  // }
  // return false; // No duplicates
  // const seen = new Set(); // Create a set to store seen numbers
  // for (let num of nums) {
  //     if (seen.has(num)) {
  //         return true; // Duplicate found
  //     }
  //     seen.add(num); // Add the number to the set
  // }
  // return false;
  // const seen = new Map(); // Create a map to store seen numbers
  // for (let num of nums) {
  //     if (seen.has(num)) {
  //         return true; // Duplicate found
  //     }
  //     seen.set(num, true); // Add the number to the map
  // }
  // return false;
}

var containsNearbyDuplicate = function (nums, k) {
  // BF :
  // const len = nums.length;
  // for(let i =0; i< len; i++){
  //   for(let j = i+1; j< len; j++){
  //     if(nums[i] === nums[j] && Math.abs(i -j) <= k){
  //       return true;
  //     }
  //   }
  // }
  // return false
  // const seen = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   if (seen.has(num) && i - seen.get(num) <= k) {
  //     return true;
  //   }
  //   seen.set(num, i);
  // }
  // return false;
};

// Product of Array Except Self

// Problem Statement
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

var productExceptSelf = function (nums) {
  // The simplest approach
  const n = nums.length;
  const answer = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        answer[i] *= nums[j];
      }
    }
  }

  return answer;

  //Using Division
  // We can calculate the product of all elements and then divide each element by the current element. However, this approach fails for cases with zero elements.

  // const n = nums.length;
  // const product = nums.reduce((acc, num) => acc * num, 1);
  // const answer = new Array(n);

  // for (let i = 0; i < n; i++) {
  //     answer[i] = product / nums[i];
  // }

  // return answer;

  // We can create two arrays, one to store the product of elements to the left and another to store the product of elements to the right. Then, we multiply corresponding elements from both arrays.

  // const n = nums.length;
  //   const left = new Array(n).fill(1);
  //   const right = new Array(n).fill(1);
  //   const answer = new Array(n);

  //   for (let i = 1; i < n; i++) {
  //       left[i] = left[i - 1] * nums[i - 1];
  //   }

  //   for (let i = n - 2; i >= 0; i--) {
  //       right[i] = right[i + 1] * nums[i + 1];
  //   }

  //   for (let i = 0; i < n; i++) {
  //       answer[i] = left[i] * right[i];
  //   }

  //   return answer;

  //  Single Pass with Constant Space
  // const n = nums.length;
  // const answer = new Array(n).fill(1);

  // let left = 1;
  // for (let i = 0; i < n; i++) {
  //     answer[i] = left;
  //     left *= nums[i];
  // }

  // let right = 1;
  // for (let i = n - 1; i >= 0; i--) {
  //     answer[i] *= right;
  //     right *= nums[i];
  // }

  // return answer;
};

// To find the maximum product of a subarray

let numss = [2, 3, -2, 4];

function maxProduct(nums) {
  // BF
  let result = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      result = Math.max(result, product);
    }
  }

  return result;

  // DP Approach
  //   let maxProd = nums[0];
  //   let minProd = nums[0];
  //   let result = maxProd;

  //   for (let i = 1; i < nums.length; i++) {
  //      let curr = nums[i];
  //      let temp = Math.max(curr, Math.max(maxProd*curr, minProd*curr));
  //      minProd = Math.min(curr, Math.min(minProd*curr, maxProd*curr));
  //      maxProd = temp;

  //      result = Math.max(result, maxProd);
  // }

  //   return result;
}

// console.log(maxProduct(numss));

function findMin(nums) {
  // Linear search
  // let min = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] < min) {
  //         min = nums[i];
  //     }
  // }
  // return min;
  // Binary search
  // let left = 0;
  // let right = nums.length - 1;
  // while (left < right) {
  //     let mid = Math.floor((left + right) / 2);
  //     if (nums[mid] > nums[right]) {
  //         left = mid + 1;
  //     } else {
  //         right = mid;
  //     }
  // }
  // return nums[left];
  // Handling Duplicates
  // let left = 0;
  //   let right = nums.length - 1;
  //   while (left < right) {
  //       let mid = Math.floor((left + right) / 2);
  //       if (nums[mid] > nums[right]) {
  //           left = mid + 1;
  //       } else if (nums[mid] < nums[right]) {
  //           right = mid;
  //       } else {
  //           right--;
  //       }
  //   }
  //   return nums[left];
  // const nums = [2, 2, 2, 0, 1, 2];
}

// Example usage
// const nums2 = [4, 5, 6, 7, 0, 1, 2];
// console.log(findMin(nums2)); // Output: 0

// function searchRotatedArray(nums, target, left = 0, right = nums.length - 1) {
//   if (left > right) {
//       return -1;
//   }

//   let mid = Math.floor((left + right) / 2);

//   if (nums[mid] === target) {
//       return mid;
//   }

//   // Check if the left half is sorted
//   if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//           return searchRotatedArray(nums, target, left, mid - 1);
//       } else {
//           return searchRotatedArray(nums, target, mid + 1, right);
//       }
//   }
//   // Otherwise, the right half must be sorted
//   else {
//       if (nums[mid] < target && target <= nums[right]) {
//           return searchRotatedArray(nums, target, mid + 1, right);
//       } else {
//           return searchRotatedArray(nums, target, left, mid - 1);
//       }
//   }
// }
// function searchRotatedArray(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (nums[mid] === target) {
//           return mid;
//       }

//       // Check if the left half is sorted
//       if (nums[left] <= nums[mid]) {
//           if (nums[left] <= target && target < nums[mid]) {
//               right = mid - 1;
//           } else {
//               left = mid + 1;
//           }
//       }
//       // Otherwise, the right half must be sorted
//       else {
//           if (nums[mid] < target && target <= nums[right]) {
//               left = mid + 1;
//           } else {
//               right = mid - 1;
//           }
//       }
//   }

//   return -1;
// }

// In JavaScript, there are multiple ways to solve the "Two Sum II - Input Array Is Sorted" problem. Here are some of the common solutions:
// Two-Pointer Technique: O(n)
// function twoSum(numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (left < right) {
//       let sum = numbers[left] + numbers[right];
//       if (sum === target) {
//           return [left + 1, right + 1]; // +1 for 1-indexed array
//       } else if (sum < target) {
//           left++;
//       } else {
//           right--;
//       }
//   }
//   return [];
// }

// Binary Search : O(log n)
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//       let left = i + 1;
//       let right = numbers.length - 1;
//       let complement = target - numbers[i];

//       while (left <= right) {
//           let mid = Math.floor((left + right) / 2);
//           if (numbers[mid] === complement) {
//               return [i + 1, mid + 1]; // +1 for 1-indexed array
//           } else if (numbers[mid] < complement) {
//               left = mid + 1;
//           } else {
//               right = mid - 1;
//           }
//       }
//   }
//   return [];
// }
