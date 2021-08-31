const express = require('express');
const bodyParser = require('body-parser');
const SERVER_PORT = 3000;
const { getFruits } = require('./controller/controller.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/fruits', getFruits);

app.listen(SERVER_PORT, () => {
  console.log('Listening on 3000');
})