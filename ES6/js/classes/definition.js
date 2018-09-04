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
    callIt(){
        console.log(this._name);
    }
}

/** Instanciates Class */
let x = new Test("Marten");

/** calls Method */
x.callIt();