const Schema = require('../config/orm');

const burgers = new Schema('burgers')
const toppings = new Schema('toppings')

module.exports = {
  burgers, toppings
}