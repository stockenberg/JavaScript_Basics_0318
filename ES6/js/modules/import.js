/**
 * Import named exports
 */
import {myFunction, myFunction2} from './export.js';

/**
 * Import default export
 */
import Test from './export.js';

/**
 * Call it
 */
myFunction();
myFunction2();

var x = new Test();
x.doIt();