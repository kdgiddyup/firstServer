var http = require('http');
var url = require('url');
var fs = require('fs');
var PORT = 8080; 
//createServer is an http module method with a callback
var server = http.createServer(serverResponse);

//createServer callback function:    
function serverResponse(req,res){
    // do something
    // parse URL
    var urlParts = url.parse(req.url);
    // display based on pathname 
    switch (urlParts.pathname) {
        case '/':
        case '/index.html':
        case '/home':
            fs.readFile("index.html",function(err,data){
                res.end(data)
            });
            break;
        case '/portfolio.html':
            res.end('<h1>Portfolio</h1><p>This is my portfolio.</p><p><a href="/home">Return to Home Page</a></p>');
            break;
        default: 
            // 404 content
            res.end('<h1>404</h1><h2>Content not found.</h2><p><a href="/home">Return to Home Page</a></p>');
            break;
    }
};
server.listen(PORT, function(){
});
