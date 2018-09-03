const sqlMethods = require('../config/orm');

const selectAllBurgers = (next) => {
  sqlMethods.selectAll('burgers', next)
}

const createBurger = (burgerName) => {
  const newBurger = {
    burger_name: burgerName
  }
  console.log(newBurger)
  sqlMethods.insertOne('burgers', newBurger)
}

const updateBurger = (burgerId) => {
  const devoured = {
    devoured: true
  }
  const burger = {
    id: burgerId
  }
  sqlMethods.updateOne('burgers', devoured, burger)
}

module.exports = {
  createBurger, updateBurger, selectAllBurgers
}