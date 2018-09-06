const connection = require('./connection')

class Schema {
  constructor(table) {
    this.table = table
  }
  selectAll(next) {
    connection.query(`SELECT * FROM ${this.table}`, 
    (err, res) => {
      if(err) throw err
      next(res)
    })
  }

  insertOne(set) {
    connection.query(`INSERT INTO ${this.table} SET ?`,
    set,
    (err, res) => {
      if(err) throw err
      console.log(res)
    })
  }

  updateOne(set, where) {
    connection.query(`UPDATE ${this.table} 
                      SET ? WHERE ?;`,
    [set, where],
    (err, res) => {
      if(err) throw err
      console.log(res)
    })
  }

  deleteOne(where) {
    connection.query(`DELETE FROM ${this.table} 
                      WHERE ?;`,
    where,
    (err, res) => {
      if(err) throw err
      console.log(res)
    })
  }
}

module.exports = Schema