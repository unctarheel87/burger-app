const models = require('../models/burger')
const burgers = models.burgers
const toppings = models.toppings

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html')
  })
  
  app.get('/api/burgers', (req, res) => {
    burgers.selectAllJoin('id', 'burger_name', 'devoured', 'topping_name', 'toppings', 'burger_id')
    .then((response) => {
      console.log(response)
      res.json(formatData(response))
    })
    .catch((err) => {
      res.status(500).end()
    })
  })

  app.get('/api/toppings', (req, res) => {
    toppings.selectAll()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).end()
    })
  })

  app.post('/api/burgers/', (req, res) => {
    const newBurger = req.body
    let burger_id = 0
    burgers.insertOne([{burger_name: newBurger.data.burger_name}])
    .then((response) => {
      burger_id = response.insertId
      toppings.insertOne([{topping_name: newBurger.data.toppings[0]}, {burger_id}])
    })
    .then(() => {
      toppings.insertOne([{topping_name: newBurger.data.toppings[1]}, {burger_id}])
    })
    .then(() => {
      toppings.insertOne([{topping_name: newBurger.data.toppings[2]}, {burger_id}])
      res.send('success')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  })

  app.put('/api/burgers/:id', (req, res) => {
    burgers.updateOne({devoured: true},{id: req.params.id})
    .then((response) => {
      if(response.changedRows === 0) {
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    })
    .catch((err) => {
      res.status(500).end()
    })
  })

  app.delete('/api/burgers/:id', (req, res) => {
    toppings.deleteOne({burger_id: req.params.id})
    .then((response) => {
      if(response.affectedRows === 0) {
        return res.status(404).end()
      } else {
        burgers.deleteOne({id: req.params.id})
        .then((response) => {
          if(response.affectedRows === 0) {
            return res.status(404).end()
          } else {
            res.status(200).end()
          }
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  })
}

function formatData(burgers) {
  for(let burger of burgers) {
    const arr = burger.toppings.split(",");
    burger.toppings = arr
  }
  return burgers
}