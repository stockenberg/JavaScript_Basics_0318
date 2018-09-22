class Test{
    /**
     * Constructs the Class with given Parameter
     * @param {*} name 
     */
    constructor(name){
        this._name = name;
    }

    /**
     * Function definition
     */
    callItAgain(){
        console.log(this._name);
    }
}

/**
 * Extends the new Class with the Test Class
 */
class MoreDefined extends Test{

    /**
     * Add the CallIt Method
     */
    callIt(){
        console.log(`More defined`);
    }

}

let x = new MoreDefined();
x.callIt();
x.callItAgain();