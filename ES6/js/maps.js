let m = new Map()
let s = Symbol()

m.set("hello", 42)
m.set(s, 34)

console.log(m.get(s))
console.log(m.size)


let x = new Map()
let obj = Symbol();

x.set(obj, {a: 1, b: 2})


console.log(x);