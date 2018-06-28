
var output = myFunction("Hallo", 1,2,4,5,6,6,7,5,4,3,2,);
console.log(output);


function nameONly(){
    // do it
}

function returnValues() {
    return "Values";
}



function myFunction(param){
    console.log(param);
    var myText = "Hallo Welt";
    return myText;
}

function myFunctionNParams(...args){
    console.log(args);
    console.log(arguments);
}


// Anonyme Funktion
var test = function () {
    console.log('Hallo');
}
// Call
test();

// OOP Ansatz in JS
function User(firstname, lastname) {
    this.name = firstname;
    this.lastname = lastname;

    this.sayMyName = function (name) {
        console.log(this.name + " " + this.lastname);
    }

    this.sendMail = function () {
        // do it
    }
}

var marten = new User('Marten', 'Stockenberg');
marten.sayMyName();

var thomas = new User('Thomas', 'IcksÜpsilon');
thomas.sayMyName();
