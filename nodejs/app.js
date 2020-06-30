var ffi = require("ffi");
var path = require("path");
var lib = ffi.Library(
  path.join(__dirname, "../sample/target/release/libsample.dylib"),
  {
    fibonacci: ["int", ["int"]],
  }
);
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time();
var rustFibonacci = lib.fibonacci(30);
console.timeEnd();
console.time();
var nodeFibonacci = fibonacci(30);
console.timeEnd();
console.log(rustFibonacci, nodeFibonacci);
