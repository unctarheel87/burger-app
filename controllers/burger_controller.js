const burgersApi = require('../models/burger')

module.exports = (app) => {
  app.get('/api/burgers', (req, res) => {
    burgersApi.selectAllBurgers((db_data) => {
      res.json(db_data)
    })
  })

  app.get('/', (req, res) => {
    res.sendFile('index.html')
  })

  app.post('/api/burgers/new', (req, res) => {
    console.log('sent to api!')
    const newBurger = req.body
    burgersApi.createBurger(newBurger.data)
    res.send(newBurger)
  })

  app.post('/api/burgers', (req, res) => {
    console.log('sent to api!')
    const updateBurger = req.body
    burgersApi.updateBurger(updateBurger.data)
    res.send(updateBurger)
  })

  app.post('/api/burgers/delete', (req, res) => {
    console.log('sent to api!')
    const deleteBurger = req.body
    burgersApi.deleteBurger(deleteBurger.data)
    res.send(deleteBurger)
  })
}
