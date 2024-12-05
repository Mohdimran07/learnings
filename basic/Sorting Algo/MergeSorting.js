/* 
    DEF: It is a sorting algorithm that is based on the Divide and Conquer paradigm. In this algorithm, the array is repeatedly divided into two equal halves and then they are combined in a sorted manner.
*/

const array = [12, 11, 13, 5, 6, 7];

const merge = (arr, low, mid, high) => {
  const temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }


};

const mergeSort = (arr, low, high) => {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const mergeArray = (arr) => {
  mergeSort(arr, 0, arr.length - 1);
};

console.log("Unsorted array:", array);
console.log(mergeArray(array));
console.log("Sorted array:", array);
