#[no_mangle]
pub extern "C" fn fibonacci(n: u64) -> u64 {
    if n <= 2 {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
