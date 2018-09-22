class Test{
    /**
     * Constructs the Class with given Parameter
     * @param {*} name 
     */
    constructor(name){
        this._name = name;
        this._base = "Hallo";
    }

    /**
     * Function definition
     */
    callIt(){
        /** calls the own this context */
        console.log("Baseclass: " + this._name);
    }
}

/**
 * Extends the Class with Baseclass
 */
class MoreDefined extends Test{

    /**
     * Constructs the Class with given Parameter
     * @param {*} name 
     */
    constructor(name){
        /** Calls Baseclasses constructor */
        super(name);
        /** assignes given value to this context */
        this._name = name;
        console.log(this._name)
    }

    /**
     * Overwrites the Baseclass Method
     */
    callIt(){

        /** Calls the Baseclass Method */
        super.callIt();

        /** Calls own and Baseclasses this context */
        console.log(`More defined: ${this._name}`);
        console.log(this._base);
    }

}

/** Instanciates Inherited class */
let x = new MoreDefined("Marten");

/** Instanciates Baseclass */
let y = new Test("Markus");

x.callIt();

y.callIt();
