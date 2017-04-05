var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello ShipLync!');
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);

/*'use strict';

// [START all]
var http = require('http'),
    fs = require('fs');
	
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});
// [END all]*/