const express = require('express');

const db = require('./database');

require('dotenv').config({ silent: true });

const app = express();

db.connectMongoAtlas();

module.exports = app;
