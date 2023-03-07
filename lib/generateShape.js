// Include packages needed for this application
const {Circle, Triangle, Square} = require('./shapes');

// Function to generate shape from user input
const generateShape = (data) => {

    let userShape = {};
    
    // Switch case for different shapes
    switch(data.shape) {
        case "circle":  
            userShape = new Circle(data);
            return userShape;
            break;
        case "triangle":
            userShape = new Triangle(data);
            return userShape;
            break;
        case "square":
            userShape = new Square(data);
            return userShape;
            break;
        default: 
            return `Not working!`
    };

};

module.exports = generateShape;

