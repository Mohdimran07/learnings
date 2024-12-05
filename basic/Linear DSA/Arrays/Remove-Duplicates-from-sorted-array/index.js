// PROBLEM: removing duplicates from a sorted array

// 1. Two Pointer Technique
// This is a common and efficient method that modifies the array in place without using additional space.

// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;

//     let i = 0; // Pointer for the last unique element
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j]; // Move unique element to the next position
//         }
//     }
//     return i + 1; // Return the length of the unique elements
// };

// 2. Using splice()
// This method involves iterating through the array and using splice() to remove duplicates. However, this is less efficient due to the shifting of elements.

// function removeDuplicates(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1); // Remove the duplicate
//             i--; // Decrement index to check the next element
//         }
//     }
//     return nums.length; // Return the new length
// }

// 3. Using a New Array
// This approach creates a new array to store unique elements. It’s straightforward but uses additional space.

// function removeDuplicates(nums) {
//     const unique = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0 || nums[i] !== nums[i - 1]) {
//             unique.push(nums[i]); // Only add unique elements
//         }
//     }
//     // Copy unique elements back to original array
//     for (let j = 0; j < unique.length; j++) {
//         nums[j] = unique[j];
//     }
//     return unique.length; // Return the length of unique elements
// }

// 4. Using Set
// Although it is not the most efficient for sorted arrays, using a Set can be a quick way to remove duplicates.
// javascript
// function removeDuplicates(nums) {
//     const uniqueSet = new Set(nums);
//     const uniqueArray = Array.from(uniqueSet);
//     for (let i = 0; i < uniqueArray.length; i++) {
//         nums[i] = uniqueArray[i]; // Copy back to original array
//     }
//     return uniqueArray.length; // Return the length of unique elements
// }