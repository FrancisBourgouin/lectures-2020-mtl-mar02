const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Client } = require("pg");
const createDbHelpers = require('./db_helpers')


const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbClient = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const {
  getAllBottles,
  insertDrink,
  insertSpiritType,
  getSpecificBottle
} = createDbHelpers(dbClient)


dbClient
  .connect()
  .then(() => {
    console.log("I AM CONNECTED")
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => console.log("I AM NOT CONNECTED" + err));


// const listOfHelpers = dbHelpers(dbClient);
// const selectPokemons = listOfHelpers.selectPokemons
// const insertPokemon = listOfHelpers.insertPokemon

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/drinks', (req, res) => {
  getAllBottles()
    .then(dbRes => {
      res.json(dbRes.rows)
    })
})

app.get('/drinks/:drink_id', (req, res) => {
  getSpecificBottle(req.params.drink_id)
    .then(dbRes => {
      res.json(dbRes.rows)
    })
})
