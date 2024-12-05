/* 
    Given an array arr[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

    Input: arr[] = {0, 1, 2, 0, 1, 2}
    Output: {0, 0, 1, 1, 2, 2}

    1st Ap: built-in opt sort tc: O(nlogn)
    2nd AP: counting 0s, 1s, 2s. TC:O(n)
    3rd AP: using 3ptr and swap on correct posistion.
*/


function sort012(arr) {
    let c0 = 0, c1 = 0, c2 = 0;

    // Count 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) 
            c0 += 1;
        else if (arr[i] === 1) 
            c1 += 1;
        else
            c2 += 1;
    }

    let idx = 0;
    // Place all the 0s
    for (let i = 0; i < c0; i++) 
        arr[idx++] = 0;

    // Place all the 1s
    for (let i = 0; i < c1; i++) 
        arr[idx++] = 1;

    // Place all the 2s
    for (let i = 0; i < c2; i++) 
        arr[idx++] = 2;
}

// let arr = [0, 1, 2, 0, 1, 2];
// sort012(arr);

function sort012(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    let mid = 0;

    // Iterate till all the elements are sorted
    while (mid <= hi) {
            if(arr[mid] === 0) {
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
         }
         else if(arr[mid] === 1) {
             mid++;
         }
         else {
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
         }
    }
}

// let arr = [0, 1, 2, 0, 1, 2];
// sort012(arr);


