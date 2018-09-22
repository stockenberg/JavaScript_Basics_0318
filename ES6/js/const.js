/**
 * const is a block scoped variable definition
 */

const myConst = 1;

if(true){
    const myScndConst = 2;
    console.log(myConst); // 1
    if(true){
        console.log(myConst); // 1
        console.log(myScndVar); // 2
    }
    console.log(myScndVar); // 2
}

console.log(typeof myScndVar); // undefined
console.log(myVar); // 1