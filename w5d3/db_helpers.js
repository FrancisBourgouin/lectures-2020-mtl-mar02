
const createDbHelpers = client => {

  const insertDrink = (values) => {
    const insertQuery = "INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ($1,$2,$3,$4,$5)"
    const insertValues = values

    client
      .query(insertQuery, insertValues)
      .then(res => console.log('Bottle inserted !', res))
      .catch(err => console.log('Err !', err))
  }

  const insertSpiritType = (values) => {
    const insertQuery = "INSERT INTO spirits (name, subtype, description) VALUES ($1,$2,$3)"
    const insertValues = values

    client
      .query(insertQuery, insertValues)
      .then(res => console.log('Spirit inserted !', res))
      .catch(err => console.log('Err !', err))
  }

  const getAllBottles = () => {
    const query = 'SELECT bottles.name, bottles.age, bottles.price, bottles.volume, spirits.name AS spirit_name, spirits.description FROM bottles JOIN spirits ON bottles.spirit_id = spirits.id'

    const bottleColumns = 'bottles.name, bottles.age, bottles.price, bottles.volume'
    const spiritColumns = 'spirits.name AS spirit_name, spirits.description'
    const builtQuery = `SELECT ${bottleColumns}, ${spiritColumns} FROM bottles JOIN spirits ON bottles.spirit_id = spirits.id`

    return client
      .query(builtQuery)
  }

  const getSpecificBottle = (id) => {
    const query = 'SELECT bottles.name, bottles.age, bottles.price, bottles.volume, spirits.name AS spirit_name, spirits.description FROM bottles JOIN spirits ON bottles.spirit_id = spirits.id'

    const bottleColumns = 'bottles.name, bottles.age, bottles.price, bottles.volume'
    const spiritColumns = 'spirits.name AS spirit_name, spirits.description'
    const builtQuery = `SELECT ${bottleColumns}, ${spiritColumns} FROM bottles JOIN spirits ON bottles.spirit_id = spirits.id WHERE bottles.id = $1`
    const values = [id]
    return client
      .query(builtQuery, values)
  }

  return { insertDrink, insertSpiritType, getAllBottles, getSpecificBottle }

}


module.exports = createDbHelpers