class Rectangle {
    /**
     * Constructs Class
     * @param {*} width 
     * @param {*} height 
     */
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    
    /**
     * Getter and Setter for the Class Properties
     */
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}


var r = new Rectangle(50, 20)

/** calls set width() */
r.width = 10;

/** calls get width() */
console.log(r.width)

/** calls area */
console.log(r.area)