function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Correctly handles both null and undefined
  } else {
    return x + 1; // intended behavior
  }
}

console.log(foo(null)); // outputs 0
console.log(foo(undefined)); // outputs 0