class Shapes {
    constructor(text, color, shapeColor) {
      this.text = text;
      this.color = color;
      this.shapeColor = shapeColor;
    }
  
    setShapeColor(newColor) {
      this.shapeColor = newColor
    }
    setText(text) {
        this.text = text
    }
    setColor(color) {
        this.color = color
    }
  }