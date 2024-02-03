import init, {fibonacci_rust} from "../rust/pkg/rust_wasm.js";
      

const fibonacci_js = (n: number): number => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci_js(n - 1) + fibonacci_js(n - 2);
  }
}

await init();
console.time("fibonacci_rust");
console.log(fibonacci_rust(40)); // Adjust n for different tests
console.timeEnd("fibonacci_rust");

console.time("fibonacci_js");
console.log(fibonacci_js(40)); // Adjust n for different tests
console.timeEnd("fibonacci_js");





