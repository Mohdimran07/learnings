console.log("bubble sort");
console.log("Implementing Bubble sort in Javascript");

let nums = [29, 10, 14, 37, 18];

const arr = (arr) => {
    let n = arr.length;

    for(let i = 0; i < n-1; i++){
        for(let j =0; j < n - i - 1; j ++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(arr(nums))