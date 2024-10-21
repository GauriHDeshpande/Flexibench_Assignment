/**
 * Task 6: Merge Sort Algorithm
Write a Python program that sorts an array of integers using Merge Sort. Explain how this algorithm works and provide its time complexity.
 */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const input = [34, 7, 23, 32, 5, 62];
const output = mergeSort(input);
console.log(output);  // Output: [5, 7, 23, 32, 34, 62]

