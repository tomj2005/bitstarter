var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var content = fs.readFileSync('index.html').toString();
  //console.log(content);



  response.send(content);
  //response.send('Hello World 2!');

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
