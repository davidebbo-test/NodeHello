var http = require('http');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello, world!</h1><br>[helloworld sample; iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);  
