const http = require('http');

/*req is request, res is response*/
const server = http.createServer((request, response) => {
    response.writeHead(200, "Status Message", {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");    
    response.end();

});

/*Remember, || means "or"*/
/*process.env.PORT says to use any port provided by the device program is running on*/
/*So process.env.PORT || 3000 means either use a port from Render, or use 3000 if that doesn't work*/
server.listen(process.env.PORT || 3000);
