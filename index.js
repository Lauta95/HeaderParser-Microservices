// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', (req, res) => {
  const ip = req.ip; //obtener ip
  const idiomas = req.acceptsLanguages('en', 'es');
  const verBrowser = req.headers['user-agent']; //Va entre corchetes porque el nombre contiene un guión. En javascript cuando querés acceder a la propiedad de un objeto con ese caracter hay que usar corchetes y mandar la propiedad como un STRING.

  const responseObject = { //se guarda en un objeto
    ipaddress: ip,
    language: idiomas,
    software: verBrowser
  };

  res.json(responseObject) //se lo muestra en un json
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
