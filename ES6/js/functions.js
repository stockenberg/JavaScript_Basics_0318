/**
 * Block scoped functions
 * 
 */

{
     function foo () {
         return 2;
     }
     {
         function foo(){
             return 3;
         }
         console.log(foo())
     }

     console.log(foo());
 }


 /**
  * Arrow functions
  */

  let x = [1,2,3,4,5,6];

  let plusOne = x.map(i => i + 1)
  let plusTwo = x.map(i => (i + 2))
  let indexPlusValue = x.map((value, index) => index + value)

  console.log(plusOne);
  console.log(plusTwo);
  console.log(indexPlusValue);

/**
 * Arrow Functions statement bodies
 */

  x.forEach(v => {
      console.log(v);
  })

/**
 * Lexical This
 * Instead of creating a **this** context in a function, the arrow functions will 
 * check the outer Scope for **this**
 */

document.onclick = function (ev){ // <- Enclosing context
    setTimeout(function () {
        this.body.innerText = "Huhu"; 
        // functions.js:51 Uncaught TypeError: Cannot set property 'innerText' of undefined
    } ,100); 
};


document.onclick = function (ev){ // <- Enclosing context
    setTimeout( () => {
        this.body.innerText = "Hallo";  } 
        // This works
      ,100);
};


/*
Old ways to solve it

var self = this;

document.onclick = function (ev){ // <- Enclosing context
    setTimeout( () => {
        self.body.innerText = "Hallo";  } 
        // This works
      ,100);
};

document.onclick = function (ev){ // <- Enclosing context
    setTimeout( () => {
        this.body.innerText = "Hallo";  } 
        // This works
      ,100);
}.bind(this);

*/

/**
 * Default Parameter Handling
 */

 function defaultEs6 (a = 1){

 } 

 // Old way

 function defaultOld(a){
     a = (a === undefined) ? 1 : a;
 }

 /**
  * Rest Parameter
  */

  function restParam(x, t, c, ...args){
        console.log(args);
  } 

  restParam(1,2,3,"a","b","c")


  /**
   * Spread Operator as Argument
   */

   let params = ["test", 2, 4];

   function f (...params){
       console.log(params.length);
   } 

   f(1, 2, params);
   f(1, 2, ...params)
