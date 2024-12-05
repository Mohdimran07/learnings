console.log("Selection sort");
console.log("Implementing Selection sort in Javascript");

let nums = [29, 10, 14, 37, 18];

const arr = (nums) => {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[smallest] > nums[j]) {
        smallest = j;
      }
    }
    [nums[i], nums[smallest]] = [nums[smallest], nums[i]];
  }

  return nums;
};

let nums2 = [29, 10, 14, 37, 18];

const arr2 = (nums) => {
  let n = nums.length;

  for (let i = 1; i < n - 1; i++) {
    
  }

  return nums;
};

console.log("Selection sort: ", arr(nums));
