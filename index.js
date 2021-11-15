require('dotenv').config();

const createError = require('http-errors');
const express = require("express");

const app = express();

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});


app.use(express.json());

const routes = require('./config/routes.config');
app.use('/api', routes);

// parse requests of content-type - application/json

app.use((req, res, next) => {
    next(createError(404, 'Route Not Found'))
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});