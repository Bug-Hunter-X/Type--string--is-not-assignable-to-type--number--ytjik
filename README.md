# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where a function expecting a number argument receives a string instead. The error message clearly points to the type mismatch.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, in the example usage, the second argument is a string, causing a type error.

## Solution

The solution involves ensuring that all arguments passed to the `add` function are numbers. This can be achieved through type checking or explicit type conversion.