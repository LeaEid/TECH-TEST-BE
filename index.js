var express = require('express');
var app = express();

// CORS POLICY
app.use(function (req, res, next) {
  const allowedOrigins = '';
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'X-data, Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
