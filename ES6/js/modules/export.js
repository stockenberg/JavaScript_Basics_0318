
/**
 * ########################################################################
 * Module Exports
 * Remember - if u wanna use it, u have to add type="module" to script tag
 * <script type="module" src="js/modules/import.js"></script>
 * ########################################################################
 */


/**
 * Export each function seperatly
 */
export function myFunction2 () {
    console.log('This is awesome!');
}


/**
 * Default Exports
 * Exports the Default of the File - used for classes
 */

class Test {
    doIt() {
        console.log("i did it!");
    }
}


export default Test


/**
 * Named export
 * Exports a list of Function- or Variablenames
 */

let myFunction = () => 
    console.log("this is the sum");


 export{
    myFunction
}