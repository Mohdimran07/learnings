/* DEF: Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large arrays as its average and worst-case time complexity is quite high. */

const arr = [5, 2, 4, 3, 1];

const bubble_sort = (arr) => {
  const n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubble_sort(arr));
