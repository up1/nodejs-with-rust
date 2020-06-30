# nodejs-with-rust

## Rust
```
$cargo new --lib sample
$cd sample
$cargo build --release
```

File `Cargo.toml` ทำการเพิ่มให้สร้่างไฟล์นามสกุล `dylib`
```
...

[lib]
crate-type=["dylib"]

...
```


## Node.js
```
node app.js
```
