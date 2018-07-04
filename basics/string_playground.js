let name = "Marten;Thomas;Test";
name = name.split(';');

name.splice(0,1, "Paul", "Sabine");
name = name.toString().split(',');
console.log(name);


function findName(needle, haystack){
    for(var i = 0; i < haystack.length; i++){
        if(haystack[i] === needle){
            return i;
        }
    }
}

let newArray;

newArray = name.map(function (value) {
    return value + " ist ein cooler Name";
});

console.log(newArray);

console.log(findName("Paul", name));