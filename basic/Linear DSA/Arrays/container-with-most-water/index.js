// You have an array of integers where each element represents the height of a line drawn on a coordinate plane. The width between each pair of lines is 1. You need to find two lines that, together with the x-axis, form a container that can hold the most water.

// Approaches
// Brute Force: Iterate through all pairs of lines and calculate the area for each pair. This has a time complexity of O(n²).

function maxArea1(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const width = j - i;
      const area = Math.min(height[i], height[j]) * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

// Two-Pointer Technique: Use two pointers starting at the beginning and end of the array, move the pointers towards each other, always moving the pointer pointing to the shorter line. This has a time complexity of O(n).

function maxArea2(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    console.log("width", width);
    const area = Math.min(height[left], height[right]) * width;
    console.log("area", area);
    maxArea = Math.max(maxArea, area);
    console.log("maxArea", maxArea);

    // Move the pointer that points to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Max-Area",maxArea2(heights))
