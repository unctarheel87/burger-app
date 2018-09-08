const burgers = require('../models/burger')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html')
  })
  
  app.get('/api/burgers', (req, res) => {
    burgers.selectAll()
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).end()
    })
  })

  app.post('/api/burgers/', (req, res) => {
    const newBurger = req.body
    burgers.insertOne({burger_name: newBurger.data})
    .then(() => {
      res.json({burger_name: newBurger.data})
    })
    .catch((err) => {
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
    burgers.deleteOne({id: req.params.id})
    .then((response) => {
      if(response.affectedRows === 0) {
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    })
    .catch((err) => {
      res.status(500).end()
    })
  })
}