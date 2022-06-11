"use strict";
require("dotenv").config();

const fs = require('fs');
const express = require('express');
const serveIndex = require('serve-index');

const publicDir = './public';
const port = process.env.PORT || 3000;

const app = express();

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

app.use(express.static('public'));
app.use('/', serveIndex('public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});