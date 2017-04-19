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
                // response header: status, {other parameters}
                res.writeHead(200,{'Content-Type': 'text/html'})
                res.end(data)
            });
            break;
        case '/foods.html':
            fs.readFile("foods.html",function(err,data){
                res.end(data)
                });
            break;
        case '/movies.html':
            fs.readFile("movies.html",function(err,data){
                res.end(data)
                });
                break;
        case '/css-frameworks.html':
            fs.readFile("css-frameworks.html",function(err,data){
                res.end(data)
                });
                break;
        case '/styles/style.css':
            fs.readFile("/styles/style.css",function(err,data){
                // need to state this is a stylesheet
                res.writeHead(200,{'Content-Type': 'text/css'});
                res.end(data)
                });
                break;

        default: 
            // 404 content
            res.writeHead(404);
            res.end('<h1>404</h1><h2>Content not found.</h2><p><a href="/home">Return to Home Page</a></p>');
            break;
    }
};
server.listen(PORT, function(){
});
