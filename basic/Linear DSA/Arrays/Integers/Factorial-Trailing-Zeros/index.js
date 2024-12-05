// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};


// The brute-force approach involves actually computing the factorial of  𝑛
//  and then counting the number of trailing zeros by repeatedly dividing the factorial by 10.
 
function factorialOfNumber(n){
    console.log("mmmmm", n);
    if(n === 0) return 1;
   return n * factorialOfNumber(n - 1);
}

function trailingZerosBF(n) {
    const fact = factorialOfNumber(n);

   let temp = fact;
   let zeros = 0

   // Count the number of trailing zeros
   while (temp % 10 === 0) {
    console.log("counting.......", zeros);
       zeros++;
       temp = Math.floor(temp / 10); // Remove one trailing zero
   }

    return zeros;
}

// Example usage:
console.log("hkjhkjhkjh", trailingZerosBF(10)); // Output will be 1
