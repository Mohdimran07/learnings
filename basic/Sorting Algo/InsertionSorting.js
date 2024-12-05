/* 
DEF: The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed in the correct position in the sorted part.
*/

// const arr = [6, 5, 4, 3, 2, 1];
// const arr = [5,15,7, 3, 6, 8, 10, 1, 2, 4];
const arr = [38, 27, 43, 3, 9, 82, 10];

// Function to perform insertion sort on the given array
const insertion_sort = (arr) => {
  // Get the length of the array
  let n = arr.length;

  // Outer loop to iterate through each element in the array
  for (let i = 0; i <= n - 1; i++) {
    // Set j to the current index i
    let j = i;

    // Inner loop to compare the current element with the previous elements
    // Shift elements that are greater than arr[j] to the right
    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap elements if the previous element is greater than the current element
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--; // Move left in the array
    }

    // Log the state of the array after each outer loop iteration
    console.log(`After inserting element at index ${i}: arr = [${arr}]`);
  }

  // Return the sorted array
  return arr;
};
const insertion_sort2 = (arr) => {
  // Get the length of the array
  let n = arr.length;

  // Outer loop to iterate through each element in the array
  for (let i = 0; i <= n - 1; i++) {
    // for (let j = i + 1; j > 0; j--) {
    //   console.log(`After inserting element at index ${i}: arr = [${arr}]`);
    //   if (arr[j - 1] > arr[j]) {
    //     [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    //   }
    // }
    let j = i;
    while(j >= 0){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      j--;
    }

    // Log the state of the array after each outer loop iteration
  }

  // Return the sorted array
  return arr;
};

console.log(insertion_sort2(arr));
