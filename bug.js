function foo(x){
  if (x == null) {
    return 0; // intended behavior
  } else {
    return x + 1; // intended behavior
  }
}

console.log(foo(null)); // outputs 0, as expected
console.log(foo(undefined)); // outputs NaN, unexpected!