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

  app.post('/api/burgers/', (req, res) => {
    console.log('sent to api!')
    const newBurger = req.body
    burgers.insertOne({burger_name: newBurger.data})
    res.send(newBurger)
  })

  app.put('/api/burgers/:id', (req, res) => {
    console.log('sent to api!')
    burgers.updateOne({devoured: true},{id: req.params.id})
    res.send('successfully deleted id: ' + req.params.id)
  })

  app.delete('/api/burgers/:id', (req, res) => {
    console.log('sent to api!')
    burgers.deleteOne({id: req.params.id})
    res.send('successfully deleted id: ' + req.params.id)
  })
}