const burgersApi = require('../models/burger')

module.exports = (app) => {
  app.get('/api', (req, res) => {
    burgersApi.selectAllBurgers((db_data) => {
      res.json(db_data)
    })
  })

  app.get('/', (req, res) => {
    res.sendFile('index.html')
  })

  app.post('/api', (req, res) => {
    console.log('sent to api!')
    const newBurger = req.body
    console.log(newBurger)
    burgersApi.createBurger(newBurger.data)
    res.send(newBurger)
  })
}
