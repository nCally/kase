
const express = require("express");
const db = require("./db")

const server = express();

server.get("/", (req, res) => res.send("Text"))

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