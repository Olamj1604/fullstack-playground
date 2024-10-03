const http = require('http'); // node-modules

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello world!!');
        res.end();
    }

    if (req.url === '/api/v1/students') {
        res.write(JSON.stringify(["Adams", "Lockwood", "Femine"]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');