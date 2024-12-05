const nums = [2, 7, 11, 15];
const target = 9;
function twoSum(arr, target) {
  // 1st Approach
  //   let n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     for(let j = i+1; j < n; j++){
  //         if(arr[i] + arr[j] === target){
  //             return [i, j]
  //         }
  //     }
  //   }
  //   return [-1, -1]

  // 2nd Approach
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
}
// console.log(twoSum(nums, target));

function BestTimeToBuyAndSell(prices) {
//   let maxProfit = 0;

//   for (let buyPrice = 0; buyPrice < prices.length; buyPrice++) {
//     for(let sellPrice= buyPrice + 1; sellPrice < prices.length; sellPrice++){
//         let profit = prices[sellPrice] - prices[buyPrice];
//         console.log("prices: ", profit);

//         maxProfit = Math.max(profit, maxProfit)
//     }
//   }

//   return maxProfit;

// 2nd approach
let minPrice = Infinity; // Initialize to a very high value
let maxProfit = 0; 

for(let price of prices){

    if(price < minPrice){
        minPrice = price;
    } else {
        let profit = price - minPrice;
        maxProfit = Math.max(profit);
    }
}

return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(BestTimeToBuyAndSell(prices))