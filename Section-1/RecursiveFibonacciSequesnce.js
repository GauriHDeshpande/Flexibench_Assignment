/**
 * Write a recursive function that returns the nth Fibonacci number. Test your function with different values of n.

 Example Input: 6
 Example Output: 8
 */

 function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 6;
let result = fibonacci(n);
console.log(result);  // Output: 8
