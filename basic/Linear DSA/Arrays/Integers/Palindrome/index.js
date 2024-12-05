// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    if(x < 0) return false;

    let originalValue = x;
    let rev = 0;
    while(originalValue > 0){
        const lastDigit = originalValue % 10;
        rev = rev * 10 + lastDigit;
        originalValue = Math.floor(originalValue/10);
    }

    return rev == x;
};

// EX: 1
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// EX: 2
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.