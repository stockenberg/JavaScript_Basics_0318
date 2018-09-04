/**
 * let is a block scoped variable definition
 */

let myVar = 1;

if(true){
    let myScndVar = 2;
    console.log(myVar); // 1
    if(true){
        console.log(myVar); // 1
        console.log(myScndVar); // 2
    }
    console.log(myScndVar); // 2
}

console.log(typeof myScndVar); // undefined
console.log(myVar); // 1