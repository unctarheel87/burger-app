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
    console.log(newBurger)
    burgersApi.createBurger(newBurger.data)
    res.send(newBurger)
  })

  app.post('/api/burgers', (req, res) => {
    console.log('sent to api!')
    const updateBurger = req.body
    console.log(updateBurger)
    burgersApi.updateBurger(updateBurger.data)
    res.send(updateBurger)
  })
}
