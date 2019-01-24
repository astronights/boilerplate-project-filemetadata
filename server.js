'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer');
var upload = multer();
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/filesize', upload.single('fileObj'), function (req, res) {
  var outPutJson = { filesize: req.file.size };
  res.status(200).json(outPutJson);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
