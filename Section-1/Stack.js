/**
 * Task 3: Implement a Stack
Implement a stack using arrays and include the basic operations: push, pop, and peek. Additionally, handle exceptions where the stack is full or empty.

 Example Usage:
 stack.push(10)
 stack.pop()
 stack.peek()
 */

 class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
    }

    // Push a new element onto the stack
    push(item) {
        if (this.stack.length >= this.maxSize) {
            throw new Error('Stack Overflow');
        }
        this.stack.push(item);
    }

    // Pop the top element from the stack
    pop() {
        if (this.stack.length === 0) {
            throw new Error('Stack Underflow');
        }
        return this.stack.pop();
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.stack.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
}

const stack = new Stack(3);
stack.push(10);
stack.push(20);
console.log(stack.peek());  // Output: 20
stack.pop();
console.log(stack.peek());  // Output: 10
