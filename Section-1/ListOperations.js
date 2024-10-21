/**
 * Task 2: List Operations
Write a Python program to remove duplicates from a list while maintaining the order of elements.

 Example Input: [1, 2, 2, 3, 4, 4, 5]
 Example Output: [1, 2, 3, 4, 5]
 */

 function removeDuplicates(arr) {
    let seen = new Set();
    let result = [];
    
    for (let item of arr) {
        if (!seen.has(item)) {
            result.push(item);
            seen.add(item);
        }
    }
    
    return result;
}

let input = [1, 2, 2, 3, 4, 4, 5];
let output = removeDuplicates(input);
console.log(output);  // Output: [1, 2, 3, 4, 5]
