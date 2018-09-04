/**
 * String Interpolation
 */


var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`


// Old standard

var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };

var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";


/**
 * Raw template strings
 */

let myString = `foo\n${ 42 }bar`;

function rawTemplate (strings, ...values) {
    console.log(strings[0])
    console.log(strings[1])
    console.log(strings.raw[0])
    console.log(strings.raw[1])
    console.log(values[0])
   
}

rawTemplate`foo\n${ 42 }bar`;
rawTemplate(myString);
