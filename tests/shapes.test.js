// Include packages needed for this application
const {Circle, Triangle, Square} = require('../lib/shapes');

// Circle Test
describe('Circle', () => {
    test('Should render Circle', () => {
        const shape = new Circle({
            text: 'SVG',
            textColor: 'white',
            shape: 'circle',
            shapeColor: 'green',
        });
        expect(shape.render()).toEqual(`<circle cx="125" cy="100" r="80" fill="${shape.shapeColor}" />`);
    });
});

// Triangle Test
describe('Triangle', () => {
    test('Should render Triangle', () => {
        const shape = new Triangle({
            text: 'SVG',
            textColor: 'white',
            shape: 'triangle',
            shapeColor: 'blue',
      });
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" />`);
    });
});

// Square Test
describe('Square', () => {
    test('Should render Square', () => {
        const shape = new Square({
            text: '$B',
            textColor: '#3e1f47',
            shape: 'square',
            shapeColor: '#006466',
      });
        expect(shape.render()).toEqual(`<rect x="50" y="20" width="150" height="150" fill="${shape.shapeColor}" />`);
    });
});
