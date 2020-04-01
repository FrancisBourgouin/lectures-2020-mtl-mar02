const { Client } = require('pg')
const createDbHelpers = require('./db_helpers')
const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

const { insertDrink, insertSpiritType } = createDbHelpers(client)
console.log(process.argv.slice(2))



client
  .connect()
  .then(res => {
    console.log('connected')
    insertDrink(process.argv.slice(2))

    // const insertQuery = "INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ($1,$2,$3,$4,$5)"
    // const insertValues = ['Bombay Sapphire', 8, 69.99, 40, 5]
    // const insertValues = process.argv.slice(2)

    // client
    //   .query(insertQuery, insertValues)
    //   .then(res => console.log('Bottle inserted !', res))
    //   .catch(err => console.log('Err !', err))

    // insertSpiritType(client)
  })

// Insert a Gin, Bombay Sapphire, 40$, 40oz 
// INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Bombay Sapphire',8,49.99,40,5)