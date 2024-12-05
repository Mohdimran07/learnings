console.log("merge-sorted array.");

// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

// Two Pointers Technique;

// function mergeSortedArrays(arr1, arr2) {
//   const mergedArray = [];
//   let i = 0,
//     j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   // Add any remaining elements from arr1
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   // Add any remaining elements from arr2
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// Merge In-Place (if arr1 has enough space at the end)
function mergeInPlace(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from arr2
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
}

// Example usage:
let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
mergeInPlace(arr1, 3, arr2, 3);
console.log(arr1); // Output: [1, 2, 2, 3, 5, 6]

