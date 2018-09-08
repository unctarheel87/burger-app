const connection = require('./connection')

class Schema {
  constructor(table) {
    this.table = table
  }
  selectAll() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ??`, 
      this.table, (err, res) => {
        if(err) reject(err)
        else resolve(res)
      })
    }) 
  }

  insertOne(set) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ?? SET ?`,
      [this.table, set],
      (err, res) => {
        if(err) reject(err)
        else resolve(res)
      })
    })
  }

  updateOne(set, where) {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE ??
                        SET ? WHERE ?;`,
      [this.table, set, where],
      (err, res) => {
        if(err) reject(err)
        else resolve(res)
      })
    })  
  }

  deleteOne(where) {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM ??
                        WHERE ?;`,
      [this.table, where],
      (err, res) => {
        if(err) reject(err)
        else resolve(res) 
      })
    })
  }
}

module.exports = Schema