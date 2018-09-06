const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : 'heroku_378b7ee547f02e5',
  multipleStatements: true
});

module.exports = connection