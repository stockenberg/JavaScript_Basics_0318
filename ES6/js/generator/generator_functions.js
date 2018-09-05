
/**
 * Asterisk marks a function as generator
 * Generators can be exited and later re-entered, the context will be saved
 */
function* range(start, end, step){
    while(start < end){
        yield start
        start += step
    }
}

/**
 * You can iterate them
 */
for (let i of range(0, 10, 2)){
    console.log(i)
}

/**
 * Interface
 */

var gen = range(10, 20, 1)
console.log(gen);
gen.next()
gen.return = true // stops the generator


/**
 * Passing a yield to another generator
 */

 function* generate(param){
     yield* range(param, 20, 1)
     yield param
 }

 var gen2 = generate(6)
 console.log(gen2.next())

 for (let ix of generate(2)){
     console.log(ix);
 }

