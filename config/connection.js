const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'ba19c37d58e9eb',
  password : '787b146a',
  database : 'heroku_378b7ee547f02e5',
  multipleStatements: true
});

module.exports = connection