const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;
require("dotenv").config()

//serve static files
app.use(express.static(path.join(__dirname, '../public')))

//configure bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('../controllers/burger_controller')(app)

app.listen(port, (err,res) =>  {
  if(err) throw err
  console.log('server is running...');
})