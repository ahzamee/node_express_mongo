const express = require('express');
const router = require("./routes");
const middlewares = require('./middlewares');
const db = require('./database');

require('dotenv').config({ silent: true });

const app = express();

app.use(...middlewares);

db.connectMongoAtlas();

router.registerApplicationRoutes(app);

app.all("*", (req, res, next) => {
  next(`Cannot find ${req.originalUrl} on this server`, 404);
});

module.exports = app;
