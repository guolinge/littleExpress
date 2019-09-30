var express = require('express');

var app = express();

app.get('/', function () {
  res.send('Hello World!')
})

app.listen(3001, function() {
  console.log('Example app listening on port 3000!')
})