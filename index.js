const _ = require('lodash');
const MYObject ={ "kebab": "roll", "burger": "pizza", "lasagna": "pasta" };
//const invert = _.invert(MYObject);
console.log(_.invert(MYObject)); 
//module.exports = invert;
const food = require("./food");
console.log(food);