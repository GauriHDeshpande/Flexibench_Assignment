/**
 * Task 1: String Manipulation
Write a function that takes a string as input and returns a new string with the characters in reverse order, excluding special characters.

 Example Input: 'hello world!'
 Example Output: 'dlrow olleh'
 */

 function reverseStringWithoutSpecialChars(str) {
    // Extract only alphabetic characters and reverse them
    let letters = str.replace(/[^a-zA-Z]/g, '').split('').reverse();
    let result = '';
    
    // Rebuild the string, skipping special characters and placing reversed letters in the original positions
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            result += letters.shift();
        } else {
            result += char;
        }
    }
    
    return result;
}

let input = 'hello world!';
let output = reverseStringWithoutSpecialChars(input);
console.log(output);  // Output: 'dlrow olleh'
