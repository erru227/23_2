const http = require('http');

/*request, response are objects from http module*/
const server = http.createServer((request, response) => {
    /*writeHead function sends status code (200 here for working), optional status message, and a header- which can be any additional data*/
    /*Content-Type is a header type, so it tells any device recieving this response to expect html language*/
    /*That lets the next line write html language directly- which is then sent to any requesting device*/
    response.writeHead(200, "Working", {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");    
    response.end();
});

/*Remember, || means "or"*/
/*process.env.PORT says to use any port provided by the device program is running on*/
/*So process.env.PORT || 3000 means either use a port from Render, or use 3000 if that doesn't work*/
server.listen(process.env.PORT || 3000);
