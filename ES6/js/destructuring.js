/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */



/**
 * Array Matching
 */

var list = [ 1, 2, 3 ]
var [ a, , b ] = list

console.log(b);


/**
 * Object Matching
 * the variable naming must match the object key naming
 */
var obj = {a: 12, b: 13, c: 16}
var {a, b, c} = obj

console.log(a);
console.log(b);
console.log(c);

/**
 * Here we can define an alternative name for the variables
 */

var obj = {a: 12, b: 13, c: 16}
var {a: foo, b: bar, c: baz} = obj


console.log(foo);
console.log(bar);
console.log(baz);

/**
 * Default values for objects and Arrays
 */

var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list

/**
 * Parameter context matching
 */

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}

f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })

/**
 * Failed resolves into undefined
 */

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list

console.log(a) // 7
console.log(b) // 42
console.log(c) // 3
console.log(d) // undefined