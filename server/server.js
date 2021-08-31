const express = require('express');
const bodyParser = require('body-parser');
const SERVER_PORT = 3000;

const app = express();
app.use(bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true })));

app.listen(SERVER_PORT, () => {
  console.log('Listening on 3000');
})