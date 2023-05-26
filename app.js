let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(req,res){
    let q = url.parse(req.url,true);
    let filename = '.' + q.pathname;
    fs.readFile(filename,function(err,data){
        if(err) {
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("ERROR 404");
        } 
        res.writeHead(200,{'Content-Type':'type/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);