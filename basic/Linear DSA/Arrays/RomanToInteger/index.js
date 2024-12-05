console.log("Roman To integer");
// 2 approaches
// 1. BF 2. Map

// BF =>
// The efficient approach to converting a Roman numeral to an integer has a time complexity of O(n), where ’n’ is the length of the input string. We iterate through the string once, The space complexity of this approach is O(1) because we use a fixed

// The key steps are:
// Create a helper function getInt(c) to get the integer value of a Roman numeral character.
// Initialize variables n (length of s), curr, result, next, and i (loop counter).
// Iterate through each character s[i] in the input string s.
// If i is equal to n - 1 (last character), add the value of s[i] to result and return it.
// Set curr to the value of s[i] and next to the value of s[i+1].
// If curr is greater than or equal to next, add curr to result and increment i by 1.
// Otherwise, add next - curr to result and increment i by 2.
// After the loop, return result as the final result.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const getInt = function (c) {
    switch (c) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return -1;
    }
  };

  const n = s.length;
  let curr = 0,
    result = 0,
    next = 0,
    i = 0;

  while (i < n) {
    if (i === n - 1) {
      result += getInt(s[i]);
      return result;
    }

    curr = getInt(s[i]);
    next = getInt(s[i + 1]);

    if (curr >= next) {
      result += curr;
      i += 1;
    } else {
      result += next - curr;
      i += 2;
    }
  }

  return result;
};

// The key steps are:
// Create a map m to store the values of each Roman numeral.
// Initialize ans to 0.
// Iterate through each character c in the input string s.
// If the current index i is less than the length of s - 1 and the value of c is less than the value of the next character, subtract the value of c from ans.
// Otherwise, add the value of c to ans.
// After the loop, return ans as the final result.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const m = new Map();
  m.set("I", 1);
  m.set("V", 5);
  m.set("X", 10);
  m.set("L", 50);
  m.set("C", 100);
  m.set("D", 500);
  m.set("M", 1000);

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && m.get(s[i]) < m.get(s[i + 1])) {
      ans -= m.get(s[i]);
    } else {
      ans += m.get(s[i]);
    }
  }

  return ans;
};




