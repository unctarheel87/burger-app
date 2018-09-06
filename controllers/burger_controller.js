const burgers = require('../models/burger')

module.exports = (app) => {
  app.get('/api/burgers', (req, res) => {
    burgers.selectAll((db_data) => {
      res.json(db_data)
    })
  })

  app.get('/', (req, res) => {
    res.sendFile('index.html')
  })

  app.post('/api/burgers/new', (req, res) => {
    console.log('sent to api!')
    const newBurger = req.body
    burgers.insertOne({burger_name: newBurger.data})
    res.send(newBurger)
  })

  app.post('/api/burgers', (req, res) => {
    console.log('sent to api!')
    const updateBurger = req.body
    console.log(updateBurger.data)
    burgers.updateOne({devoured: true},{id: updateBurger.data})
    res.send(updateBurger)
  })

  app.post('/api/burgers/delete', (req, res) => {
    console.log('sent to api!')
    const deleteBurger = req.body
    burgers.deleteOne({id: deleteBurger.data})
    res.send(deleteBurger)
  })
}