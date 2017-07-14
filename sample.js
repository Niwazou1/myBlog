// GET / HTTP/1.1
// Host: www.nicovideo.jp
// User-Agent: curl/7.51.0
// Accept: */*

// http_query = `GET / HTTP/1.1
// Host: www.nicovideo.jp
// User-Agent: curl/7.51.0
// Accept: */*`

// console.log(http_query)

// request = {
//   method: "GET",
//   path: "/",
//   version: "1.1",
//   headers: {
//     "Host": "www.nicovideo.jp"
//   }
// }

// let str = `GET / HTTP/1.1
// Host: www.nicovideo.jp
// User-Agent: curl/7.51.0
// Accept: */*`

// let requests;
// str.split("\n");
// console.log(str[0]);
// let one = str[0].split();

// console.log(one);


http_query = `GET / HTTP/1.1
Host: www.nicovideo.jp
User-Agent: curl/7.51.0
X-Accel-Cache: dead: beaf: space
Accept: */*`

function parseHTTP(request) {
  let lines = request.split("\n");
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

let req = parseHTTP(http_query);
console.log(req);
