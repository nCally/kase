
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const routes = require("./routes");

require('dotenv').config();

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const origin = { origin: '*', }
server.use(cors(origin));

server.use('/api', routes);

const PORT = process.env.PORT || "8000";


db.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`app running on ${PORT}`);
    })
  })
  .catch(error => {
    throw error;
  })