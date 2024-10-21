/**
 * Section 2: Sorting and Algorithms
Task 5: Quick Sort Algorithm
Implement the Quick Sort algorithm in Python and test it on a list of random integers.

 Example Input: [34, 7, 23, 32, 5, 62]
 Example Output: [5, 7, 23, 32, 34, 62]
 */

 function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return quickSort(left).concat(middle).concat(quickSort(right));
}

// Example usage
const input = [34, 7, 23, 32, 5, 62];
const output = quickSort(input);
console.log(output);  // Output: [5, 7, 23, 32, 34, 62]
