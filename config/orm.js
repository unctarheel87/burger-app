const connection = require('./connection')

const selectAll = (table, next) => {
  connection.query(`SELECT * FROM ${table}`, 
  (err, res) => {
    if(err) throw err
    next(res)
  })
}

const insertOne = (table, set) => {
  connection.query(`INSERT INTO ${table} SET ?`,
  set,
  (err, res) => {
    if(err) throw err
    console.log(res)
  })
}

const updateOne = (table, set, where) => {
  connection.query(`UPDATE ${table} 
                    SET ? WHERE ?;`,
  [set, where],
  (err, res) => {
    if(err) throw err
    console.log(res)
  })
}

const deleteOne = (table, where) => {
  connection.query(`DELETE FROM ${table} 
                    WHERE ?;`,
  where,
  (err, res) => {
    if(err) throw err
    console.log(res)
  })
}

module.exports = {
  selectAll, insertOne, updateOne, deleteOne 
}
