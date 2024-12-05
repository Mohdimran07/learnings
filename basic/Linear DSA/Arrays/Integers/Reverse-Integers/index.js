// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Approach
//  1. Initialize a variable rev to store the reversed number and set it to 0.
//  2. Iterate through the digits of the input number x:
//      *Extract the last digit of x using the modulo 10 operation and store it in the variable digit.
//      *Update rev by multiplying it by 10 and adding digit.
//      *Divide x by 10 to remove the last digit.
// 3. Check if the reversed number rev exceeds the range of a 32-bit signed integer. If it does, return 0.
//  4. Return the reversed number rev.

var reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    const lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.trunc(x / 10);
  }

  if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31)) return 0;

  return rev;
};

// Input: x = 123
// Output: 321
