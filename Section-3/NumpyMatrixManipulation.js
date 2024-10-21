/**
 * Task 8: Numpy Matrix Multiplication
Use the numpy library to multiply two matrices and print the result. Generate two 3x3 matrices filled with random integers to test.
 */

const math = require('mathjs');

// Generate two 3x3 matrices with random integers
const matrixA = math.randomInt([3, 3], 1, 10);
const matrixB = math.randomInt([3, 3], 1, 10);

// Perform matrix multiplication
const resultMatrix = math.multiply(matrixA, matrixB);

console.log("Matrix A:", matrixA);
console.log("Matrix B:", matrixB);
console.log("Result of matrix multiplication:", resultMatrix);
