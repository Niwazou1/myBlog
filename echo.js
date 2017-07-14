let net = require('net');

let server = net.createServer(function(conn){
    conn.on('data', function(data){
        console.log(data);
        conn.write(data);    
    });
});

server.listen(3000);
