const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    var url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
    }else if(url ==='/about'){
        res.write('<h1> About me </h1>');
        res.end();
    }else if(url ==='/no'){
        res.write('<h1 style="font-size: 500px"> NO </h1>');
        res.end();
    }else if(url ==='/time'){
        res.write(new Date().toString());
        res.end();
    }
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

