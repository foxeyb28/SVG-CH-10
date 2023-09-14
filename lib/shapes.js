class Shapes {
  constructor(text, color, shapeColor) {
    this.text = text;
    this.color = color;
    this.shapeColor = shapeColor;
    }

   
  setText(text) {
    this.text = text;
  }
  setColor(color) {
    this.color = color;
  }

setShapeColor(color) {
  this.shapeColor = color;
}
}
class Circle extends Shapes {
  constructor(text, color, shapeColor) {
    super(text, color, shapeColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text> </svg>`;
  }
}
class Square extends Shapes {
    constructor(text, color, shapeColor) {
      super(text, color, shapeColor);
    }
  
    render() {
      return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text> </svg>`;
    }
  }
class Triangle extends Shapes {
    constructor(text, color, shapeColor) {
      super(text, color, shapeColor);
    }
  
    render() {
      return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <polygon points="200,10 280,210 130,210" fill="${this.shapeColor}" /> <text x="200" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text> </svg>`;
    }
  }
  module.exports = {Circle, Triangle, Square}