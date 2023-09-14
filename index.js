const inquirer = require("inquirer")
const fs = require("fs")
const {Square, Triangle, Circle} = require("./lib/shapes.js")

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'What color do you want?',
      choices: ["blue", "pink", "red"],
    },
    {
      type: 'input',
      name: 'text',
      message: 'provide svg text-3 charaters',
    },
    {
      type: 'list',
      name: 'textcolor',
      message: 'what textcolor do you want',
      choices: ["white", "black", "purple"],
    },
    
  ])
  .then((answers) => {
    console.log(answers)
    let shape; 
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle()
        break;
      case "Square":
        shape = new Square()
        break;
      case "Circle":
        shape = new Circle()
        break;
    
      default:
        break;
    }
    shape.setColor(answers.textcolor)
    shape.setText(answers.text)
    shape.setShapeColor(answers.shapeColor)
    
    fs.writeFile(`./examples/${answers.shape}.svg`, shape.render(), (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
