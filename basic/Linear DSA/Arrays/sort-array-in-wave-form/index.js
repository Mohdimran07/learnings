/* 
    Given an unsorted array of integers, sort the array into a wave array.
    arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

    Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
    Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 

    1st AP: First sort the input array, then swap all adjacent elements.  O(n Log n) time and O(1) Space
    2nd AP: The idea is based on the fact that if we make sure that all even positioned (at index 0, 2, 4, ..) elements are greater than their adjacent odd elements, we don’t need to worry about oddly positioned elements. 
     
       O(n) Time and O(1) Space 

    ==> Traverse all even positioned elements of the input array, and do the following. 
        * If the current element is smaller than the previous odd element, swap the previous and current.
        * If the current element is smaller than the next odd element, swap next and current
        
*/

function sortInWave(arr, n) {
  // Sort the input array
  arr.sort((a, b) => a - b);

  // Swap adjacent elements
  for (let i = 0; i < n - 1; i += 2) swap(arr, i, i + 1);
}

// Driver code
// let arr = [10, 90, 49, 2, 1, 5, 23];
// let n = arr.length;

// sortInWave(arr, n);

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// This function sorts arr[0..n-1]
// in wave form, i.e.,
// arr[0] >= arr[1] <= arr[2] >=
// arr[3] <= arr[4]....
function sortInWave(arr, n) {
  // Traverse all even elements
  for (let i = 0; i < n; i += 2) {
    // If current even element
    // is smaller than previous
    if (i > 0 && arr[i - 1] > arr[i]) swap(arr, i - 1, i);

    // If current even element
    // is smaller than next
    if (i < n - 1 && arr[i] < arr[i + 1]) swap(arr, i, i + 1);
  }
}

// driver code

let arr = [10, 90, 49, 2, 1, 5, 23];
let n = arr.length;
sortInWave(arr, n);
