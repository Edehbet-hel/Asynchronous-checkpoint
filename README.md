# Async/Await and Promises Example in JavaScript

This repository demonstrates practical use cases of JavaScript's `async/await` syntax, alongside handling delays, promises, and error management in asynchronous operations.

## Overview

The project contains three key examples:
1. **Delaying execution in an array iteration**: Uses `async/await` to log values from an array with a delay between each iteration.
2. **Simulating an API call**: Demonstrates how to handle an asynchronous function (like fetching data from an API) using `async/await`.
3. **Error handling with async/await**: Simulates an API call with random success/failure and shows how to manage errors in asynchronous code using `try/catch`.

## Code Structure

### Task 1: Iterating Over an Array with Delay

This task demonstrates how to delay logging each value of an array by 1 second using `async/await`.

```javascript
// Helper function that returns a promise that resolves after a given delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async function that iterates over an array and logs each value with a 1-second delay
async function iterateWithAsyncAwait(arr) {
    for (let value of arr) {
        console.log(value);
        await delay(1000); // Wait for 1 second before logging the next value
    }
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
