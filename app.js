var express = require('express');
var path = require('path');
var app = express();
var port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('hello world')
  })

  app.post('/', function (req, res) {
    res.send('12')
  })
  app.listen(port, () =>
   console.log(`Example app listening on port ${port}!`))

   