/* DEF: Selection sort is a sorting technique in which we find the minimum element in every iteration and place it in the array beginning from the first index. Thus, a selection sort also gets divided into a sorted and unsorted subarray. */

const arr = [5, 2, 4, 3, 1];
// Function to perform selection sort on the given array
function selectionSorting(arr) {
  // Outer loop to iterate through each element in the array except the last one
  for (let i = 0; i <= arr.length - 2; i++) {
    // Assume the minimum index is the current index
    let minIdx = i;
    console.log(`Iteration ${i + 1}: Starting with minIdx = ${minIdx}, arr = [${arr}]`);

    // Inner loop to find the index of the smallest element in the unsorted portion of the array
    for (let j = i; j <= arr.length - 1; j++) {
      // If a smaller element is found, update minIdx to this new index
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        console.log(`Found new minimum at index ${minIdx} with value ${arr[minIdx]}`);
      }
    }

    // Swap the found minimum element with the first element of the unsorted portion
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  // Return the sorted array
  return arr;
}

console.log(selectionSorting(arr));
