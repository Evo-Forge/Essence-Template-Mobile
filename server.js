const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static(path.normalize(__dirname + '/assets')));
app.use('/build', express.static(path.normalize(__dirname + '/build')));

app.use(function(req, res) {
  res.sendFile(path.normalize(__dirname + '/index.html'));
});

app.listen(PORT);
console.log('Essence Server on PORT:', PORT);
