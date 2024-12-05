// Problem : To find the first and last occurrences of a target element in a sorted array, several efficient solutions can be applied. Here are the main approaches

// 1) Linear Search Approach
// 2) Using findIndex and lastIndexOf
// 3) Binary Search Approach

// 1) Linear Search Approach
function searchRangeLinear(nums, target) {
  let first = -1,
    last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) first = i; // First occurrence
      last = i; // Update last occurrence
    }
  }

  return [first, last];
}

// 2) Using findIndex and lastIndexOf
function searchRangefindIndex(nums, target) {
  const first = nums.indexOf(target);
  const last = nums.lastIndexOf(target);
  return [first, last];
}

// 3) Binary Search Approach
var searchRange = function (nums, target) {
  const output = [];

  // Find lower bound
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) right = mid;
    else left = mid + 1;
  }
  console.log("left", left);
  // If target is not found, return [-1, -1]
  if (left === nums.length || nums[left] !== target) return [-1, -1];

  output.push(left); // First occurrence

  // Find upper bound
  let lowerBound = left;
  right = nums.length;
  while (lowerBound < right) {
    const mid = lowerBound + Math.floor((right - lowerBound) / 2);
    if (nums[mid] <= target) lowerBound = mid + 1;
    else right = mid;
  }

  console.log("right", right);
  console.log("lowerBound", lowerBound);
  output.push(lowerBound - 1); // Last occurrence
  return output;
};

console.log(searchRange([0, 0, 1, 1, 3, 5], 1));
