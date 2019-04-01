const express = require('express');
const http = require('http');

const app = express();


let httpServer = http.createServer(app);
console.log('Http server listening on port 3002');
httpServer.listen(3002);
app.get('/', function (req, res) {
  res.send('test server running');
});
