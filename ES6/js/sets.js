/**
 * Collect unique data
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * 
 */

let s = new Set();

s.add('Hello').add('Servus').add('Hello');
console.log(s.size)
console.log(s.has('Hello'))

/**
 * Interface
 
    s.clear()
    s.delete(value)
    s.entries()
    s.forEach()
    s.keys()
    s.values()

*/

let x = new Set([1,2,3,4,5,6,7,7,8,9,9,9,10])

console.log(x);

var o = {a: 1, b: 2}

x.add(o)
x.add({a: 1, b: 2})

console.log(x);

x.add({a: 1, b: 2})

console.log(x);

x.add(o)

console.log(x);