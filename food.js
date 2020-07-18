const _ = require('lodash');
const MYObject ={ "kebab": "roll", "burger": "pizza", "lasagna": "pasta" };
const food = _.invert(MYObject);
module.exports = food;
