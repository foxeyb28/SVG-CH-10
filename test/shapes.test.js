const {Square, Circle, Triangle} = require('../lib/shapes');

describe('Circle', () => {
  test('should throw error if render() is called', () => {
    const circle = new Circle();
    circle.setColor(`blue`)
    circle.setText(`abc`)
    circle.setShapeColor(`green`)
    const err = new Error('Child class must implement a render() method.')
    expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text> </svg>`);
  });
});


describe('Square', () => {
  test('should throw error if render() is called', () => {
    const square = new Square();
    square.setColor(`blue`)
    square.setText(`abc`)
    square.setShapeColor(`green`)
    const err = new Error('Child class must implement a render() method.')
    expect(square.render()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text> </svg>`);
  });
});


describe('Triangle', () => {
  test('should throw error if render() is called', () => {
    const triangle = new Triangle();
    triangle.setColor(`blue`)
    triangle.setText(`abc`)
    triangle.setShapeColor(`green`)
    const err = new Error('Child class must implement a render() method.')
    expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <polygon points="200,10 280,210 130,210" fill="green" /> <text x="200" y="150" font-size="60" text-anchor="middle" fill="blue">abc</text> </svg>`);
  });
});