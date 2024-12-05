console.log("3-sum!");

// Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

// nums = [-1, 0, 1, 2, -1, -4];
// Output = [[-1, -1, 2],[-1, 0, 1]];

// Brute Force (Inefficient)
// This approach involves checking all possible triplets. It is not efficient and is generally not used for large arrays due to its high time complexity.

function threeSum(nums) {
    const results = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]];
                    results.push(triplet);
                }
            }
        }
    }

    // Remove duplicates
    return Array.from(new Set(results.map(JSON.stringify)), JSON.parse);
}


// Sorting + Two Pointers TC:- O(n^2)
// This is the most efficient approach, taking advantage of sorting and the two-pointer technique.
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const results = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}
