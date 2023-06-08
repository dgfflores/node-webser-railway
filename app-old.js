
const http = require('http');


http.createServer( (req, res) => {
    console.log(req)
    res.write('hola mundo');
    res.end();
}).listen(8080);


console.log('Escuchando en el puerto', 8080);