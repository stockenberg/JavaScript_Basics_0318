class Rectangle extends Shape {
    /**
     * Define static method
     */
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}
class Circle extends Shape {
    /**
     * Define static method
     */
    static defaultCircle () {
        return new Circle("default", 0, 0, 100)
    }
}

/** call class methods without class instance */
var defRectangle = Rectangle.defaultRectangle()
var defCircle    = Circle.defaultCircle()