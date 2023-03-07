// Include packages needed for this application
const isCSScolor = require('./isCSScolor');

// Class Shape
class Shapes {
    constructor ({text, textColor, shape, shapeColor}) {
        
        this.textCheck(text);
        this.text = text;

        this.colorCheck(textColor);
        this.textColor = textColor;

        this.shape = shape;

        this.colorCheck(shapeColor);
        this.shapeColor = shapeColor;

    };

    // Check color input
    colorCheck(color) {
        
        let input = color.toLowerCase();

        if(!input) throw new Error ("Input cannot be empty");

        let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
        
        if(!regex.test(color) && !isCSScolor(color)) throw new Error ("Input must be valid color keyword or hex code");

    };

    // Check text input
    textCheck(input) {
        if(!input) throw new Error ("Input cannot be empty");
        if(input.length > 3) throw new Error ("Input cannot be more than 3 characters");
    };
    
};

// Class Circle
class Circle extends Shapes {
    constructor(data){
        super(data);
    };

    render() {
        return `<circle cx="125" cy="100" r="80" fill="${this.shapeColor}" />`;
    };
};

// Class Triangle
class Triangle extends Shapes {
    constructor(data){
        super(data);
    };

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    };
};

// Class Square
class Square extends Shapes {
    constructor(data){
        super(data);
    };

    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
    };
};

module.exports = {Circle, Triangle, Square};
