/* 
    DEF: QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
*/

let array = [10, 7, 8, 9, 1,2, 5, 12, 10];

const partition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
};

const qs = (arr, low, high) => {
  if (low < high) {
    // pIdx is the partition return index of pivot
    let pIdx = partition(arr, low, high);
    qs(arr, low, pIdx - 1);
    qs(arr, pIdx + 1, high);
  }
};

const quick_sort = (arr) => {
  let n = arr.length;
  qs(arr, 0, n - 1);
  return arr;
};

console.log(quick_sort(array));
