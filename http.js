let net = require('net');

let server = net.createServer(function(conn){ //サーバー作成(httpオブジェクト)
    let requestBody = "";
    conn.on('data',function(data){
        let chunk = data.toString();
        requestBody += chunk;
        let req = parseHTTP(requestBody);
        console.log(req);
        let body = "hello " + req.path;
        let responce = [
            "HTTP/1.1 302 OK",
            "Date: " + (new Date()).toGMTString(),
            "Connection: close",
            "Content-Type: text/plain",
            "Content-Length: " + body.length,
            ""
        ];
        conn.write(responce.join("\r\n"));
        conn.write("\r\n");
        conn.write(body);
        conn.write("\r\n");
        conn.end();
    });
});

server.listen(3000);

function parseHTTP(request) {
  let lines = request.split("\r\n");
  let firstLine = lines.shift(); //　取得している
  let method, path, version;

  [method, path, version] = firstLine.split(" ");
  version = version.substr("HTTP/".length); // 引数分の文字を消す
  

  let headers = {};
  for(let header of lines) {
    let fields = header.split(': ');
    let key = fields.shift();
    headers[key] = fields.join(': ');
  }

  return {
    method: method,
    path: path,
    version: version,
    headers: headers
  }
}
