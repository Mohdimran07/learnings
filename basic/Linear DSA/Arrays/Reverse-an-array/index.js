// Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

// case 1 : using built-in function arr.reverse()
// case 2 : using an extra array to reverse
// case 3 : using 2 ptr approach for t.c
// case 4: Using Recursion – O(n) Time and O(n) Space

const arr = [1, 4, 3, 2, 6, 5];

const builtInFun = (a) => {
  return a.reverse();
};

// console.log(builtInFun(arr));

const reverseArray = (arr) => {
  const n = arr.length - 1;
  const reversedArray = [];

  for (let i = n; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

// console.log(reverseArray(arr));

const twoPointer = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr;
};

// console.log("[2 ptr]", twoPointer(arr));

const recusriveRev = (a) => {
  let n = a.length;
   reverseRecArray(a, 0, n - 1);
   return a;
};

const reverseRecArray = (arr, l, r) => {
  if (l >= r) {
    return;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];

  reverseRecArray(arr, l + 1, r - 1);
};

console.log(recusriveRev(arr));
