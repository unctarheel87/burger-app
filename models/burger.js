const sqlMethods = require('../config/orm');

const selectAllBurgers = (next) => {
  sqlMethods.selectAll('burgers', next)
}

const createBurger = (burgerName) => {
  const newBurger = {
    burger_name: burgerName
  }
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

const deleteBurger = (burgerId) => {
  const burger = {
    id: burgerId
  }
  sqlMethods.deleteOne('burgers', burger)
}

module.exports = {
  createBurger, updateBurger, selectAllBurgers, deleteBurger
}