const connection = require('./connection')

class Schema {
  constructor(table) {
    this.table = table
  }

  helperArr(sets) {
    let sqlArr = [this.table]
    for(let set of sets) {
      sqlArr.push(set)
    }
    return sqlArr
  }

  helperMark(sets) {
    let mark = ""
    for(let set of sets) {
      set === sets[0] ? mark += "?" : mark += ",?"
    }
    console.log(mark)
    return mark
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

  selectAllJoin(t1_id, col1, col2, col3, table2, foreign_key) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT t1.??, ??, ??, GROUP_CONCAT(??) AS toppings
                        FROM ?? AS t1
                        LEFT JOIN ?? AS t2
                        ON t1.?? = t2.??
                        GROUP BY t1.??, ??
                        `, 
      [t1_id, col1, col2, col3, this.table, table2, t1_id, foreign_key, t1_id, col1],                  
      (err, res) => {
        if(err) reject(err)
        else resolve(res)
        console.log(res)
      })
    }) 
  }

  insertOne(sets) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ?? SET ${this.helperMark(sets)}`,
      this.helperArr(sets),
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