# Unexpected NaN in JavaScript Function with Null Check

This repository demonstrates a subtle JavaScript bug related to handling `null` and `undefined` values in a function.

The function `foo` is designed to return 0 if the input `x` is `null` and `x + 1` otherwise. However, when `undefined` is passed as input, it unexpectedly returns `NaN` instead of triggering the `x == null` condition.

## Bug Description
The issue stems from the loose equality check (`==`) used in the `if` condition. In JavaScript, `undefined` does not equal `null` using loose equality, leading to the `else` block being executed, resulting in `NaN` when trying to add 1 to `undefined`.

## Solution
The solution involves using strict equality (`===`) or explicitly checking for both `null` and `undefined`.