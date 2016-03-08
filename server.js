var express = require('express');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// Find the appropriate database to connect to, default to localhost if not found.
var connect = function() {
  mongoose.connect('mongodb://localhost/mydb', function(err, res) {
    if(err) {
      console.log('Error connecting' + err);
    }else {
      console.log('Succeeded connected');
    }
  });
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/server/models').forEach(function(file) {
  if(~file.indexOf('.js')) require(__dirname + '/server/models/' + file);
});

var port = 3000;
var publicPath = path.resolve(__dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// We point to our static assets
app.use(express.static(publicPath));

// Bootstrap routes
require('./server/routes')(app);

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});