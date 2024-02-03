use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn fibonacci_rust(n: i32) -> i64 {
  if n <= 1 {
    return n as i64;
  }
  return fibonacci_rust(n - 1) + fibonacci_rust(n - 2);
}





