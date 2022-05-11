const express = require('express');
const router = require("./routes");

const db = require('./database');

require('dotenv').config({ silent: true });

const app = express();

db.connectMongoAtlas();

router.registerApplicationRoutes(app);

module.exports = app;
